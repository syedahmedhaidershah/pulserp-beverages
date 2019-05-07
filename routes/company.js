const defs = require('../imports/defaults');
const errs = defs.errorMessages.company;
const succ = defs.successMessages.company;
const queries = require('../imports/queries').company;

module.exports = function (router, mysql) {
    router.post('/company/returnmt', (req, res) => {
        const quant = req.body.quantity;

        const query = mysql.format(queries.returnmt, [quant, quant, req.body.item_id]);

        mysql.query(query, (e, r, f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.returnmt));
            } else {
                res.send(defs.err(succ.returnmt));
                
                const logQ = mysql.format(queries.logCompanyReturn, [req.body.item_id, quant]);

                mysql.query(logQ, (e,r,f) => {
                    if(e) console.log(e);
                });
            }
        });
    });
}