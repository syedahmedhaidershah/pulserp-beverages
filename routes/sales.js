const defs = require('../imports/defaults');
const errs = defs.errorMessages.sales;
const succ = defs.successMessages.sales;
const queries = require('../imports/queries').sales;
const departures = require('../imports/queries').departures;
const iQueries = require('../imports/queries').items;

module.exports = function (router, mysql) {
    router.post('/sales/makeone', (req, res) => {

        const cart = [];
        let pay = 0;
        let balance = 0;
        let discounts = 0;
        let lastInsertedId = '';

        let total = req.body.paid;
        let totalDis = req.body.mDiscount;

        const adQuery = mysql.format(queries.autoDeposit, [req.body.salesman.customer_id]);
        mysql.query(adQuery, (e, r, f) => {
            if (e) {
                res.send(defs.errRes);
                return false;
            }
            req.body.data.forEach(d => {
                if (d.onList > 0) {
                    pay = 0;
                    balance = 0;
                    discounts += d.onList * (d.data.cscheme + req.body.salesman['h'.concat(d.data.item_id)]);
                    const useVal = d.onList * (d.data.selling - d.data.cscheme - req.body.salesman['h'.concat(d.data.item_id)]);

                    if (total > 0) {
                        if (totalDis >= useVal) {
                            totalDis -= useVal;
                            total -= useVal;
                        } else {
                            if (total > (useVal - totalDis)) {
                                pay = useVal - totalDis;
                                total -= useVal - totalDis;
                            } else {
                                pay = total;
                                balance = useVal - totalDis - total;
                                total = 0;
                            }
                            totalDis = 0;
                        }
                    } else {
                        balance += useVal;
                    }
                    cart.push([
                        req.body.salesman.customer_id,
                        d.data.item_id,
                        d.onList,
                        pay,
                        balance,
                        discounts
                    ]);
                }
            });

            const useMtQuery = mysql.format(queries.mtremainingforcustomer, [req.body.salesman.customer_id]);

            mysql.query(useMtQuery, (e, r, f) => {
                let mtr = req.body.mtr;

                r.forEach(s => {
                    const remaining = s.quantity - s.returned;
                    let retq = '';

                    if (mtr > 0) {
                        // returnmt: "UPDATE sales SET cleared=IF(balance=0 AND (returned+?)=quantity,1,0), returned=returned+? WHERE invoice_id=?",
                        if (mtr < (remaining)) {
                            retq = mysql.format(queries.returnmt, [mtr, mtr, s.invoice_id]);
                            mtr = 0;
                        } else {
                            retq = mysql.format(queries.returnmt, [remaining, remaining, s.invoice_id]);
                            mtr -= (remaining);
                        }
                        mysql.query(retq, (e, r, f) => {
                            if (e) console.log(e);
                        });
                    }
                });
                setTimeout(() => {
                    res.send(defs.msg(succ.insert));
                    cart.forEach(c => {
                        const query = mysql.format(queries.insert, c);

                        mysql.query(query, (e, r, f) => {
                            if (e) {
                                console.log(e);
                                // res.send(defs.err(errs.insert));
                            } else {
                                // res.send(defs.msg(succ.insert));
                                const mtquery = mysql.format(queries.managemtsale, [c[2], c[2], c[1]]);
                                const depquery = mysql.format(departures.insert, [r.insertId, JSON.stringify(req.body)]);

                                mysql.query(depquery, (e, r, f) => {
                                    if (e) {
                                        console.log(e);
                                    }
                                });
                                mysql.query(mtquery, (e, r, f) => {
                                    if (e) {
                                        console.log(e);
                                    }
                                });
                            }
                        });
                    });
                }, 500);
            });
            // const quantity = useData.quantity;
            // const query = mysql.format(queries.insert, [
            //     useData.customer_id,
            //     useData.item_id,
            //     useData.quantity,
            //     useData.deposit,
            //     useData.balance,
            //     useData.cshceme,
            //     useData.hdiscount,
            //     useData.mdiscount,
            //     useData.date_time,
            //     useData.cleared,
            //     useData.returned
            // ]);
        });
    });

    router.post('/sales/details', (req, res) => {
        mysql.query(queries.salesDetails, (e, r, f) => {
            if (e) {
                console.log(e);
            } else {
                let retSales = [];
                r.forEach(v => {
                    const check = retSales.filter(sale => {
                        if (Object.keys(sale)[0] == (new Date(v.date_time).getTime())) {
                            return sale;
                        }
                    });
                    if (check.length == 0) {
                        let pushObject = {};
                        pushObject[(new Date(v.date_time).getTime())] = {
                            data: [
                                v
                            ],
                            name: v.cName,
                            total: (v.deposit + v.balance),
                            deposit: v.deposit,
                            balance: v.balance
                        }
                        retSales.push(pushObject);
                    } else {
                        retSales = retSales.filter(sale => {
                            const useKey = Object.keys(sale)[0];
                            if (useKey == (new Date(v.date_time).getTime())) {
                                sale[useKey].data.push(v);
                                sale[useKey].total += (v.deposit + v.balance);
                                sale[useKey].deposit += v.deposit;
                                sale[useKey].balance += v.balance;
                            }
                            return sale;
                        });
                    }
                });
                let improv = [];
                retSales.forEach(r => {
                    const useKey = Object.keys(r)[0];
                    let ret = {};
                    ret = r[useKey];
                    ret.id = useKey;
                    improv.push(ret);
                });
                res.send(defs.setRetRes('def', improv));
            }
        });
    })

    router.post('/deposit', (req, res) => {
        const deposit = req.body.deposit;

        const query = mysql.format(queries.deposit, [deposit, deposit]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.err(errs.deposit));
            } else {
                res.send(defs.msg(succ.deposit));
            }
        });
    });

    router.post('/returnmt', (req, res) => {
        const returned = req.body.returned;

        const query = mysql.format(queries.returnmt, [returned, returned]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.err(errs.returnmt));
            } else {
                res.send(defs.msg(succ.returnmt));

                const mtquery = mysql.format(iQueries.managmtreturn, [returned]);

                mysql.query(mtquery, (e, r, f) => {
                    if (e) {
                        console.log(e);
                    }
                })
            }
        });
    });

    router.post('/clear/record', (req, res) => {
        const useArr = [req.body.toclear, req.body.toclear, req.body.invoice_id];
        const useQuery = mysql.format(queries.returnmt, useArr);

        mysql.query(useQuery, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.err(errs.returncrate));
            } else {
                res.send(defs.msg(succ.returnmt));
            }
        });
    });

    router.post('/sale/return', (req, res) => {

        const useArr = [req.body.toreturn, req.body.toreturn, req.body.toreturn, req.body.invoice_id];
        const useQuery = mysql.format(queries.returncrate, useArr);

        mysql.query(useQuery, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.err(errs.returncrate));
            } else {
                res.send(defs.msg(succ.returncrate));
            }
        });
    });

    router.post('/sale/complete', (req, res) => {
        let useDate = new Date(req.body.date_time);
        const useMonth = ((useDate.getMonth() + 1) < 10) ? '0'.concat((useDate.getMonth() + 1).toString()) : (useDate.getMonth() + 1).toString();
        const dateValue = (useDate.getDate().toString() < 10) ? '0'.concat(useDate.getDate().toString()) : (useDate.getDate().toString());

        const useDateParts = useDate.toString().split(' ');

        useDate = useDateParts[3].concat('-').concat(useMonth).concat('-').concat(dateValue).concat(' ').concat(useDateParts[4]);
        const query = mysql.format(queries.complete, [useDate]);
        // Sun May 05 2019 02:44:30 GMT + 0500(Pakistan Standard Time)

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(succ.cleared));
            }
        });
    });

    router.post('/sale/autodeposit', (req, res) => {
        let useDate = new Date(req.body.date_time);
        const useMonth = ((useDate.getMonth() + 1) < 10) ? '0'.concat((useDate.getMonth() + 1).toString()) : (useDate.getMonth() + 1).toString();
        const dateValue = (useDate.getDate().toString() < 10) ? '0'.concat(useDate.getDate().toString()) : (useDate.getDate().toString());

        const useDateParts = useDate.toString().split(' ');

        useDate = useDateParts[3].concat('-').concat(useMonth).concat('-').concat(dateValue).concat(' ').concat(useDateParts[4]);

        const query = mysql.format(queries.autoDepositOnSale, [useDate]);
        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.err(errs.deposit));
            } else {
                res.send(defs.msg(succ.deposit));
            }
        });

    });

    router.post('/sale/deposit', (req, res) => {

        let toClear = req.body.toclear;

        const sales = req.body.data;

        sales.forEach(s => {
            if(toClear > s.balance) {
                s.deposit += s.balance;
                toClear -= s.balance;
                s.balance = 0;
            } else {
                s.deposit += toClear;
                s.balance -= toClear;
                toClear = 0;
            }
            const query = mysql.format(queries.depositOnSale, [s.deposit, s.balance, s.balance, s.invoice_id]);
            mysql.query(query, (e, r, f) => {
                if (e) {
                    console.log(e);
                    res.send(defs.err(errs.deposit));
                } else {
                    res.send(defs.msg(succ.deposit));
                }
            });
        });

    });

    router.post('/sales/departures', (req, res) => {
        const query = mysql.format(departures.get, [req.body.invoice_id]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(r));
            }
        });
    });

    router.post('/sales/getbydate', (req, res) => {
        let useDate = new Date(req.body.date_time);
        const fDate = useDate;
        const useMonth = ((useDate.getMonth() + 1) < 10) ? '0'.concat((useDate.getMonth() + 1).toString()) : (useDate.getMonth() + 1).toString();
        const dateValue = (useDate.getDate().toString() < 10) ? '0'.concat(useDate.getDate().toString()) : (useDate.getDate().toString());

        const useDateParts = useDate.toString().split(' ');
        useDate = useDateParts[3].concat('-').concat(useMonth).concat('-').concat(dateValue).concat(' ').concat(useDateParts[4]);

        let useDate2 = new Date(fDate.getTime() + 86400000);
        const useMonth2 = ((useDate2.getMonth() + 1) < 10) ? '0'.concat((useDate2.getMonth() + 1).toString()) : (useDate2.getMonth() + 1).toString();
        const dateValue2 = (useDate2.getDate().toString() < 10) ? '0'.concat(useDate2.getDate().toString()) : (useDate2.getDate().toString());

        const useDateParts2 = useDate2.toString().split(' ');
        useDate2 = useDateParts2[3].concat('-').concat(useMonth2).concat('-').concat(dateValue2).concat(' ').concat(useDateParts2[4]);


        const query = mysql.format(queries.getByDate, [useDate, useDate2]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(r));
            }
        });
    });
}