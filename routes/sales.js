const defs = require('../imports/defaults');
const errs = defs.errorMessages.sales;
const succ = defs.successMessages.sales;
const queries = require('../imports/queries').sales;

module.exports = function (router, mysql) {
    router.post('/sales/makeone', (req, res) => {
        console.log(req.body);
        const cart = [];
        let pay = 0;
        let balance = 0;
        let discounts = 0;

        let total = req.body.paid;
        let totalDis = req.body.mDiscount;

        const adQuery = mysql.format(queries.autoDeposit, [req.body.salesman.customer_id]);
        mysql.query(adQuery, (e, r, f) => {
            if(e) {
                res.send(defs.errRes);
                return false;
            }
            req.body.data.forEach(d => {
                if (d.onList > 0) {
                    pay = 0;
                    balance = 0;
                    discounts += d.data.cscheme + req.body.salesman['h'.concat(d.data.item_id)];
                    const useVal = d.onList * (d.data.selling) - d.data.cscheme - req.body.salesman['h'.concat(d.data.item_id)];

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

                            mysql.query(mtquery, (e, r, f) => {
                                if (e) {
                                    console.log(e);
                                }
                            });
                        }
                    });
                });
            }, 100)

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

                const mtquery = mysql.format(queries.managmtreturn, [returned]);

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
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(succ.returnmt));
            }
        });
    });
}