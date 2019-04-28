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
            if(e) {
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
}