import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { MessagesService } from '../messages.service';
import { SalesService } from '../sales.service';
import { MatDialog } from '@angular/material';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-salesman-list',
  templateUrl: './salesman-list.component.html',
  styleUrls: ['./salesman-list.component.css']
})
export class SalesmanListComponent implements OnInit {

  customersList = [];

  constructor(
    private customers: CustomersService,
    private messages: MessagesService,
    private sales: SalesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.messages.currentMessage.subscribe(data => {
      if (data === 'salesman') {
        this.retreive();
      }
    });
    this.retreive();
  }

  retreive() {
    this.customers.getAll().subscribe(res => {
      if (!(res.error)) {
        this.customersList = res.message;
      }
    });
  }

  showInfo(c) {
    const forward = c;
    const ref = this.dialog.open(CustomerDetailsComponent, {
      height: (window.innerHeight - 50).toString().concat('px'),
      width: (window.innerWidth - 50).toString().concat('px'),
      data: forward,
      maxWidth: '100%',
      panelClass: 'md-p-0'
    });
  }
}
