module.exports = {
    defRes: {
        error: false,
        message: 200
    },
    errRes: {
        error: true,
        message: 'An unhandled exception occured, please contact your administrator.'
    },
    err(str) {
        let thisRes = module.exports.errRes;
        thisRes.message = str;
        return thisRes;
    },
    msg(str) {
        let thisRes = module.exports.defRes;
        thisRes.message = str;
        return thisRes;
    },
    setRetRes: (type, msg) => {
        let thisRes = module.exports.defRes;
        if (type == 'err') {
            thisRes = module.exports.errRes;
        }
        thisRes.message = msg;
        return thisRes;
    },
    errorMessages: {
        inventory: {
            insert: 'Error adding item to inventory, please contact your administrator',
            read: 'Error retreiving items from inventory',
            delete: 'Error deleting item from inventory, please contact your administrator',
            notfound: 'Error retreiving information for this item, please contact your administrator',
            update: 'Information for this item couldn\'t be updated, please contact your administrator'
        },
        register: {
            add: 'Could not register you in at the moment. Please try again in a while',
            update: 'The registeration data was incomplete. Contact support sevices'
        },
        salesman: {
            insert: 'Error saving salesman, please contact your administrator'
        }
    },
    successMessages: {
        inventory: {
            add: 'Your item has been added successfully',
            update: 'You have successfully updated your inventory'
        },
        salesman: {
            add: 'You have successfully added a salesman'
        },
        consumer: {
            cleared: 'You have successfully cleared a sales record'
        }
    }
}