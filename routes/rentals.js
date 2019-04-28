const defs = require('../imports/defaults');
const errs = defs.errorMessages.rentals;
const succ = defs.successMessages.rentals;
const queries = require('../imports/queries').rentals;

module.exports = function (router, mysql) {
    router.post('/rent/out', (req, res) => {
        const query = generalf.mysqlQuery(mysql, req.body, queries.add);

        mysql.query(
            query,
            (error, results, fields) => {
                if (error) {
                    res.send(defs.errRes);
                } else {
                    res.send(defs.msg('You have successfully rent out an item'));
                }
            }
        )
    });

    router.post('/get/rentals/incomplete', (req, res) => {
        const query = generalf.mysqlQuery(mysql, req.body, queries.getAll);

        mysql.query(
            query,
            (error, results, fields) => {
                if (error) {
                    res.send(defs.errRes);
                } else {
                    res.send(defs.msg(results));
                }
            }
        )
    });

    router.post('/clear/rental', (req, res) => {
        const rentId = req.body.rent_id;
        const query = mysql.format(queries.update, [rentId]);
        // console.log(query);
        mysql.query(
            query,
            (error, results, fields) => {
                if (error) {
                    res.send(defs.errRes);
                } else {
                    res.send(defs.msg('You have cleared a rental-sale'));
                }
            }
        )
    });
}