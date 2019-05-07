SELECT restock_event.amount AS purchase, items.name, items.empty_account, sales.* FROM items JOIN (SELECT item_id, SUM(quantity) AS quantity, SUM(returned) AS returned, date_time FROM sales WHERE date_time>"2019-05-05 00:00:00" AND date_time<"2019-05-06 00:00:00" GROUP BY item_id) AS sales on items.item_id = sales.item_id JOIN (SELECT SUM(amount) AS amount, item_id, date_time FROM restock_event WHERE date_time>"2019-05-05 00:00:00" AND date_time<"2019-05-07 00:00:00" GROUP BY item_id) AS restock_event ON restock_event.item_id = items.item_id;
SELECT restock_event.amount AS purchase, items.name, items.empty_account, sales.* FROM items JOIN (SELECT item_id, SUM(quantity) AS quantity, SUM(returned) AS returned, date_time FROM sales WHERE date_time>'2019-05-06 00:00:00' AND date_time<'2019-05-07 00:00:00' GROUP BY item_id) AS sales on items.item_id = sales.item_id JOIN (SELECT SUM(amount) AS amount, item_id, date_time FROM restock_event WHERE date_time>'2019-05-06 00:00:00' AND date_time<'2019-05-07 00:00:00' GROUP BY item_id) AS restock_event ON restock_event.item_id = items.item_id;