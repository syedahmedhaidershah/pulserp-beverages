const funct = require('../imports/functions');
const defs = require('../imports/defaults');
const errs = defs.errorMessages;
const succ = defs.successMessages;
const queries = require('../imports/queries').customers;

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
                res.send(defs.err(errs.salesman.insert));
            } else if (r.affectedRows === 0) {
                res.send(defs.err(errs.inventory.insert));
            }
            res.send(defs.msg('You have successfully added a salesman'));
        });
    });
}