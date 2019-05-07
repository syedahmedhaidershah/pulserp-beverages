module.exports = {
    items: {
        getitem: "SELECT * FROM items WHERE item_id=?",
        getall: "SELECT * FROM items",
        restock: "UPDATE items SET quantity=quantity+?, empty_account=empty_account+?, empty_store=empty_store+? WHERE item_id=?",
        restockEvent: "INSERT INTO restock_event (item_id,amount) VALUES (?,?)",
        managemtsale: "UPDATE items SET quantity=quantity-?, empty_store=empty_store-?",
        managmtreturn: "UPDATE items SET empty_store=empty_store+?",
        datewiseStock: "SELECT restock_event.amount AS purchase, items.name, items.empty_account, sales.* FROM items JOIN (SELECT item_id, SUM(quantity) AS quantity, SUM(returned) AS returned, date_time FROM sales WHERE date_time>? AND date_time<? GROUP BY item_id) AS sales on items.item_id = sales.item_id JOIN (SELECT SUM(amount) AS amount, item_id, date_time FROM restock_event WHERE date_time>? AND date_time<? GROUP BY item_id) AS restock_event ON restock_event.item_id = items.item_id"
    },
    customers: {
        getall: "SELECT * FROM customers",
        insert: "INSERT INTO `customers` (??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        balancependingOne: 'SELECT sales.customer_id,sales.invoice_id,customers.name,SUM(sales.balance) AS remaining FROM `sales` JOIN customers ON sales.customer_id = customers.customer_id GROUP BY date_time HAVING SUM(balance)>0 AND customer_id=?',
        getSalesEmptySpecific: "SELECT sales.*, items.item_id, items.empty, items.name AS iName, customers.customer_id, customers.name FROM sales JOIN (SELECT * FROM items WHERE empty > -1) as items ON sales.item_id=items.item_id JOIN customers ON sales.customer_id = customers.customer_id WHERE `cleared`=0 ORDER BY invoice_id DESC",
        updateHDis: "UPDATE customers SET ??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=?,??=? WHERE customer_id=?",
        getSalesWRTCustomer: "SELECT sales.*, items.name FROM sales JOIN items ON sales.item_id=items.item_id WHERE customer_id=? ORDER BY date_time DESC"
    },
    sales: {
        insert: "INSERT INTO sales (customer_id, item_id, quantity, deposit, balance, discounts, date_time, cleared, returned) VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP,0,0)",
        deposit: "UPDATE sales SET deposit=deposit+?, balance=balance-?, cleared=IF(returned=quantity,1,0) WHERE invoice_id=?",
        autoDeposit: "UPDATE sales SET deposit=deposit+balance, balance=0, cleared=IF(returned=quantity,1,0) WHERE customer_id=?",
        returnmt: "UPDATE sales SET returned=returned+?, cleared=IF(balance=0 AND (returned+?)=quantity,1,0) WHERE invoice_id=?",
        returncrate: "UPDATE sales SET quantity=quantity-?, returned=IF(quantity-?=returned,1,0), cleared=IF(balance=0 AND (returned=quantity-?),1,0) WHERE invoice_id=?",
        mtremainingDetailed: "SELECT * FROM sales JOIN (SELECT items.item_id, items.name, items.consumer, items.rental, items.cost, items.selling, items.empty FROM items) AS items ON sales.item_id = items.item_id JOIN (SELECT customers.name AS cName, customers.customer_id FROM `customers`) AS innerCS ON sales.customer_id = innerCS.customer_id WHERE balance > 0 ORDER BY invoice_id DESC",
        mtremaining: "SELECT * FROM sales WHERE returned<quantity AND quantity>0",
        mtremainingforcustomer: "SELECT * FROM sales WHERE returned<quantity AND customer_id=? AND quantity>0",
        updateEmptyNotAll: "UPDATE `sales` SET `cleared`=IF(?=(quantity-returned),1,cleared), returned=IF(?<=(quantity-returned),returned+?,returned) WHERE `customer_id`=? AND `invoice_id`=?",
        managemtsale: "UPDATE items SET quantity=quantity-?, empty_store=empty_store-? WHERE item_id=?",
        salesDetails: "SELECT sales.*, items.name, items.selling, customers.name AS cName, customers.h50, customers.h51, customers.h52, customers.h53, customers.h54, customers.h55, customers.h56, customers.h57, customers.h58, customers.h59, customers.h60, customers.h61, customers.h62, customers.h63, customers.h64, customers.h65, customers.h66, customers.h67,  customers.h68 FROM sales JOIN items ON sales.item_id = items.item_id JOIN customers ON sales.customer_id = customers.customer_id WHERE sales.quantity>0 ORDER BY invoice_id DESC",
        complete: "UPDATE sales SET complete=1 WHERE date_time=?",
        depositOnSale: "UPDATE sales SET deposit=?, balance=?, cleared=IF(returned=quantity AND ?=0,1,0) WHERE invoice_id=?",
        autoDepositOnSale: "UPDATE sales SET deposit=deposit+balance, balance=0, cleared=IF(returned=quantity,1,0) WHERE date_time=? AND balance>0",
        getByDate: "SELECT GROUP_CONCAT(items.name) AS itemNames, customers.name as cName, GROUP_CONCAT(sales.quantity) as quantity,GROUP_CONCAT(sales.returned) AS returned, GROUP_CONCAT(sales.item_id) AS itemIds,SUM(sales.deposit) as deposit,SUM(sales.balance) AS balance, sales.customer_id, sales.date_time FROM sales JOIN items ON items.item_id=sales.item_id  JOIN customers ON sales.customer_id=customers.customer_id WHERE date_time>? && date_time<? GROUP BY date_time"
    },
    company: {
        returnmt: "UPDATE items SET empty_account=empty_account-?, empty_store=empty_store-? WHERE item_id=?",
        logCompanyReturn: "INSERT INTO return_event (item_id, amount) VALUES (?,?)"
    },
    rentals: {
        getRentalsItems: "SELECT * FROM rental_items",
        add: "INSERT INTO `rentals` (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)",
        getAll: "SELECT rentals.*, items.name AS iName, customers.name AS cName FROM `rentals` JOIN `items` ON rentals.item_id=items.item_id JOIN customers ON rentals.customer_id=customers.customer_id ORDER BY `rent_id` DESC",
        update: "UPDATE `rentals` SET `returned`=CURRENT_TIMESTAMP,`paid`=`rpd` WHERE `rent_id`=?"
    },
    departures: {
        insert: "INSERT INTO departures (invoice_id, value, date_time) VALUES (?,?,CURRENT_TIMESTAMP)",
        get: "SELECT * FROM departures WHERE invoice_id=?"
    },
    accounts: {
        getCapital: "SELECT * FROM accounts",
        transfertoStore: "UPDATE accounts SET bank=bank-?,store=store+?",
        transfertoBank: "UPDATE accounts SET bank=bank+?,store=store-?",
        depositToStore: "UPDATE accounts SET bank=bank+?",
        depositToBank: "UPDATE accounts SET store=store+?",
        withdrawFromStore: "UPDATE accounts SET bank=bank-?",
        withdrawFromBank: "UPDATE accounts SET store=store-?",
    }
}