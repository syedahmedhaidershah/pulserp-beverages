const defs = require('../imports/defaults');
const errs = defs.errorMessages;
const succ = defs.successMessages;
const queries = require('../imports/queries').items;

module.exports = function(router, mysql) {
    router.post('/items/getall', (req, res) => {
        mysql.query(queries.getall, (e,r,f) => {
            res.send(defs.setRetRes('def', r));
        });
    });

    // router.post('/items/insert', (req,res) => {
    //     mysql.query(queries.insert, (e, r, f) => {
    //         if (r.affectedRows === 0) {
    //             res.send(defs.err(errs.inventory.insert));
    //         }
    //         res.send(defs.msg('You have successfully inserted an item'));
    //     });
    // });
}