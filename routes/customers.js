const funct = require('../imports/functions');
const defs = require('../imports/defaults');
const errs = defs.errorMessages.salesman;
const succ = defs.successMessages.salesman;
const queries = require('../imports/queries').customers;
const salesQueries = require('../imports/queries').sales;
const salesSuccMessages = defs.successMessages.sales;

module.exports = function (router, mysql) {
    router.post('/customers/getall', (req, res) => {
        mysql.query(queries.getall, (e, r, f) => {
            if (e) {
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(r));
            }
        });
    });

    router.post('/customers/insert', (req, res) => {
        const query = funct.mysqlQuery(mysql, req.body, queries.insert);

        mysql.query(query, (e, r, f) => {
            if (e) {
                res.send(defs.err(errs.insert));
            } else if (r.affectedRows === 0) {
                res.send(defs.err(errs.insert));
            } else {
                res.send(defs.msg(succ.insert));
            }
        });
    });

    router.post('/customers/balancepending', (req, res) => {
        const id = req.body.customer_id;

        const query = mysql.format(queries.balancependingOne, [id]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                res.send(defs.err(errs.balancepending));
            } else {
                res.send(defs.msg(r));
            }
        });
    });

    router.post('/customers/empty/sales/specific', (req, res) => {
        mysql.query(queries.getSalesEmptySpecific, (e, r, f) => {
            if (e) {
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(r));
            }
        });
    });

    router.post('/customers/autodeposit', (req, res) => {
        const adQuery = mysql.format(salesQueries.autoDeposit, [req.body.customer_id]);
        mysql.query(adQuery, (e, r, f) => {
            if (e) {
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(salesSuccMessages.cleared));
            }
        });
    });

    router.post('/customers/update/hdis', (req, res) => {
        let query = queries.updateHDis;
        req.body.data.forEach(v => {
            query = mysql.format(query, ['h'.concat(v.item_id.toString()), v.hdiscount]);
        });

        const fQuery = mysql.format(query, req.body.customer_id);

        mysql.query(fQuery, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.err(errs.update));
            } else {
                res.send(defs.msg(succ.update))
            }
        });
    });

    router.post('/customers/datewise', (req, res) => {
        const query = mysql.format(queries.getSalesWRTCustomer, [req.body.customer_id]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.errRes);
            } else {
                let current = 1;
                const retVal = {};
                r.forEach(v => {
                    const useD = new Date(v.date_time).toLocaleString().split(' ')[0];
                    if (retVal.hasOwnProperty(useD)) {
                        retVal[useD].paid += v.deposit;
                        retVal[useD].balance += v.balance;
                        retVal[useD].mt += v.quantity;
                    } else {
                        retVal[useD] = {};
                        retVal[useD].paid = 0;
                        retVal[useD].balance = 0;
                        retVal[useD].mt = 0;
                        retVal[useD].paid += v.deposit;
                        retVal[useD].balance += v.balance;
                        retVal[useD].mt += v.quantity;
                    }
                });
                res.send(defs.msg(retVal));
            }
        });
    });
}