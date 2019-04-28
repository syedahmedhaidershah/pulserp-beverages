const defs = require('../imports/defaults');
const errs = defs.errorMessages.inventory;
const succ = defs.successMessages.inventory;
const queries = require('../imports/queries').items;

module.exports = function(router, mysql) {
    router.post('/items/getall', (req, res) => {
        mysql.query(queries.getall, (e,r,f) => {
            res.send(defs.msg(r));
        });
    });

    router.post('/items/getitem', (req, res) => {
        const id = req.body.item_id;

        const query = mysql.format(queries.getitem, [id]);

        mysql.query(queries, (e, r, f) => {
            res.send(defs.msg(r));
        });
    });

    router.post('/items/restock', (req, res) => {
        const quant = req.body.quantity;
        const id = req.body.item_id

        const query = mysql.format(queries.restock, [quant, quant, quant, id]);

        console.log(query)

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.update));
            } else {
                res.send(defs.msg(succ.update));
            }
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