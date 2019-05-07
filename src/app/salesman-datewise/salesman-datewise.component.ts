import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { MatSelect, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-salesman-datewise',
  templateUrl: './salesman-datewise.component.html',
  styleUrls: ['./salesman-datewise.component.css']
})
export class SalesmanDatewiseComponent implements OnInit {
  customers = [];
  sales = [];
  salesKeys = [];

  constructor(
    private salesman: CustomersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.salesman.getAll().subscribe(res => {
      if (!(res.error)) {
        this.customers = res.message;
      }
    });
  }

  retRec(s: MatSelect) {
    const forward = {
      customer_id: s.value
    };
    this.salesman.dateWise(forward).subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        this.sales = Object.values(res.message);
        Object.keys(res.message).forEach((v, i) => {
          // tslint:disable-next-line:no-string-literal
          this.sales[i]['id'] = v;
        });
      }
    });
  }

  getDateTime(s) {
    return new Date(new Date(s.date_time).getTime()).toLocaleString();
  }

}
