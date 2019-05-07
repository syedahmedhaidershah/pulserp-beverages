const defs = require('../imports/defaults');
const errs = defs.errorMessages.accounts;
const succ = defs.successMessages.accounts;
const queries = require('../imports/queries').accounts;

module.exports = function (router, mysql) {
    router.post('/account/getcapital', (req, res) => {
        mysql.query(queries.getCapital, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(r));
            }
        });
    });

    router.post('/account/transfertostore', (req, res) => {
        const amount = req.body.amount;

        const query = mysql.format(queries.transfertoStore,[amount,amount]);

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(succ.def));
            }
        });
    });

    router.post('/account/transfertobank', (req, res) => {
        const amount = req.body.amount;

        const query = mysql.format(queries.transfertoBank,[amount,amount]);

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(succ.def));
            }
        });
    });

    router.post('/account/deposittostore', (req, res) => {
        const amount = req.body.amount;

        const query = mysql.format(queries.depositToStore,[amount]);

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(succ.def));
            }
        });
    });

    router.post('/account/deposittobank', (req, res) => {
        const amount = req.body.amount;

        const query = mysql.format(queries.depositToBank,[amount]);

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(succ.def));
            }
        });
    });

    router.post('/account/withdrawfromstore', (req, res) => {
        const amount = req.body.amount;

        const query = mysql.format(queries.withdrawFromStore,[amount]);

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(succ.def));
            }
        });
    });

    router.post('/account/withdrawfrombank', (req, res) => {
        const amount = req.body.amount;

        const query = mysql.format(queries.withdrawFromBank,[amount]);

        mysql.query(query, (e,r,f) => {
            if(e) {
                console.log(e);
                res.send(defs.err(errs.def));
            } else {
                res.send(defs.msg(succ.def));
            }
        });
    });

}