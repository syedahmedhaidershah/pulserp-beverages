import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SalesService } from '../sales.service';
import { ItemsService } from '../items.service';
import { MessagesService } from '../messages.service';
import { StockReportDatewiseComponent } from '../stock-report-datewise/stock-report-datewise.component';

@Component({
  selector: 'app-datewise-stock',
  templateUrl: './datewise-stock.component.html',
  styleUrls: ['./datewise-stock.component.css']
})
export class DatewiseStockComponent implements OnInit {

  itemsList = [];
  itemIds = [];
  showList = [];

  selectedDate = new Date();

  constructor(
    private snackBar: MatSnackBar,
    private sales: SalesService,
    private items: ItemsService,
    private messages: MessagesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items.getAll.subscribe(res => {
      if (res.error) {
      } else {
        this.itemsList = res.message;
        this.itemIds = this.itemsList.map(i => {
          return i.item_id;
        });
      }
    });
  }

  getDate($e) {
    this.selectedDate = $e.value;
    this.items.getStockByDate({
      date_time: this.selectedDate
    }).subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        const temp = {};
        this.itemsList.forEach(i => {
          temp[i.item_id] = i;
          temp[i.item_id].purchase = 0;
          temp[i.item_id].returned = 0;
          temp[i.item_id].quantity = 0;
        });
        res.message.forEach(r => {
          temp[r.item_id].purchase = r.purchase;
          temp[r.item_id].returned = r.returned;
          temp[r.item_id].quantity = r.quantity;
        });
        this.showList = Object.values(temp);
      }
    });
  }

  getTime(d) {
    const dt = new Date(d);
    return dt.toLocaleTimeString();
  }

  printSalesReport() {
    this.dialog.open(StockReportDatewiseComponent, {
      height: (window.innerHeight).toString().concat('px'),
      width: (window.innerWidth).toString().concat('px'),
      maxWidth: '100vw',
      panelClass: 'md-p-0',
      data: this.showList
    });
  }
}
