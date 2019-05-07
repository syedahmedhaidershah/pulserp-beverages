import { Component, OnInit, } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SalesService } from '../sales.service';
import { SalesReportDatewiseComponent } from '../sales-report-datewise/sales-report-datewise.component';
// import { ItemsService } from '../items.service';
// import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-stock-datewise',
  templateUrl: './stock-datewise.component.html',
  styleUrls: ['./stock-datewise.component.css']
})
export class StockDatewiseComponent implements OnInit {

  salesList = [];

  selectedDate = new Date();

  constructor(
    private snackBar: MatSnackBar,
    private sales: SalesService,
    // private items: ItemsService,
    // private messages: MessagesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  getDate($e) {
    this.selectedDate = $e.value;
    this.sales.getByDate({
      date_time: this.selectedDate
    }).subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        res.message.forEach(r => {
          const ids = r.itemIds.split(',');
          const quantities = r.quantity.split(',');
          const returns = r.returned.split(',');
          const names = r.itemNames.split(',');
          r.data = [];
          ids.forEach((id, i) => {
            r.data.push({
              // tslint:disable-next-line:object-literal-shorthand
              id: id,
              quantity: quantities[i],
              returned: returns[i],
              name: names[i]
            });
          });
        });
        this.salesList = res.message;
      }
    });
  }

  getTime(d) {
    const dt = new Date(d);
    return dt.toLocaleTimeString();
  }

  printSalesReport() {
    this.dialog.open(SalesReportDatewiseComponent, {
      height: (window.innerHeight).toString().concat('px'),
      width: (window.innerWidth).toString().concat('px'),
      maxWidth: '100vw',
      panelClass: 'md-p-0',
      data: this.salesList
    });
  }

}
