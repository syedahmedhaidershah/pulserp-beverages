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
            insert: 'Could not register you in at the moment. Please try again in a while',
            update: 'The registeration data was incomplete. Contact support sevices'
        },
        salesman: {
            insert: 'Error saving salesman, please contact your administrator',
            balancepending: 'Error retreiving pending balance'
        },
        sales: {
            insert: 'An error occured making the current sale',
            deposit: 'An error occured updating balance for the salesman/customer',
            returnmt: 'An error occured receiving MT'
        },
        company: {
            returnmt: "An error occured returning MT to company"
        },
        rentals: {
            insert: 'You have successfully rent out an item',
            update: 'You have cleared a rental-sale'
        }
    },
    successMessages: {
        inventory: {
            insert: 'Your item has been added successfully',
            update: 'You have successfully updated your inventory'
        },
        salesman: {
            insert: 'You have successfully added a salesman'
        },
        sales: {
            insert: 'You have successfully made a sale',
            deposit: 'You have successfully updated balance for the salesman/customer',
            cleared: 'You have successfully cleared a sales record',
            returnmt: 'You have successfully received MT'
        },
        company: {
            returnmt: "You have successfully returned MT to company"
        }
    }
}