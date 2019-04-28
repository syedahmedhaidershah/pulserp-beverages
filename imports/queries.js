module.exports = {
    items: {
        getitem: "SELECT * FROM items WHERE item_id=?",
        getall: "SELECT * FROM items",
        restock: "UPDATE items SET quantity=quantity+?, empty_account=empty_account+?, empty_store=empty_store+? WHERE item_id=?",
        managemtsale: "UPDATE items SET quantity=quantity-?, empty_store=empty_store-?",
        managmtreturn: "UPDATE items SET empty_store=empty_store+?",
    },
    customers: {
        getall: "SELECT * FROM customers",
        insert: "INSERT INTO `customers` (??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        balancependingOne: 'SELECT sales.customer_id,sales.invoice_id,customers.name,SUM(sales.balance) AS remaining FROM `sales` JOIN customers ON sales.customer_id = customers.customer_id GROUP BY date_time HAVING SUM(balance)>0 AND customer_id=?',
        getSalesEmptySpecific: "SELECT sales.*, items.item_id, items.empty, items.name AS iName, customers.customer_id, customers.name FROM sales JOIN (SELECT * FROM items WHERE empty > -1) as items ON sales.item_id=items.item_id JOIN customers ON sales.customer_id = customers.customer_id WHERE `cleared`=0 ORDER BY invoice_id DESC"
    },
    sales: {
        insert: "INSERT INTO sales (customer_id, item_id, quantity, deposit, balance, discounts, date_time, cleared, returned) VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP,0,0)",
        deposit: "UPDATE sales SET deposit=deposit+?, balance=balance-?, cleared=IF(returned=quantity,1,0) WHERE invoice_id=?",
        autoDeposit: "UPDATE sales SET deposit=deposit+balance, balance=0, cleared=IF(returned=quantity,1,0) WHERE customer_id=?",
        returnmt: "UPDATE sales SET cleared=IF(balance=0 AND (returned+?)=quantity,1,0), returned=returned+? WHERE invoice_id=?",
        mtremainingDetailed: "SELECT * FROM sales JOIN (SELECT items.item_id, items.name, items.consumer, items.rental, items.cost, items.selling, items.empty FROM items) AS items ON sales.item_id = items.item_id JOIN (SELECT customers.name AS cName, customers.customer_id FROM `customers`) AS innerCS ON sales.customer_id = innerCS.customer_id WHERE balance > 0 ORDER BY invoice_id DESC",
        mtremaining: "SELECT * FROM sales WHERE returned<quantity",
        updateEmptyNotAll: "UPDATE `sales` SET `cleared`=IF(?=(quantity-returned),1,cleared), returned=IF(?<=(quantity-returned),returned+?,returned) WHERE `customer_id`=? AND `invoice_id`=?",
        managemtsale: "UPDATE items SET quantity=quantity-?, empty_store=empty_store-? WHERE item_id=?"
    },
    company: {
        returnmt: "UPDATE items SET empty_account=empty_account-?, empty_store=empty_store-?"
    },
    rentals: {
        add: "INSERT INTO `rentals` (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)",
        getAll: "SELECT rentals.*, items.name AS iName, customers.name AS cName FROM `rentals` JOIN `items` ON rentals.item_id=items.item_id JOIN customers ON rentals.customer_id=customers.customer_id ORDER BY `rent_id` DESC",
        update: "UPDATE `rentals` SET `returned`=CURRENT_TIMESTAMP,`paid`=`rpd` WHERE `rent_id`=?"
    }
}