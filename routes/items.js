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

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.update));
            } else {
                res.send(defs.msg(succ.update));

                const rEQuery = mysql.format(queries.restockEvent, [id, quant]);
                mysql.query(rEQuery, (e,r,f) => {
                    if(e) console.log(e);
                });
            }
        });
    });

    router.post('/items/stockbydate', (req, res) => {
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


        const query = mysql.format(queries.datewiseStock, [useDate, useDate2, useDate, useDate2]);

        mysql.query(query, (e, r, f) => {
            if (e) {
                console.log(e);
                res.send(defs.errRes);
            } else {
                res.send(defs.msg(r));
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