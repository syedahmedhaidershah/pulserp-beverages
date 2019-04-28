import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { ItemsService } from '../items.service';
import { SalesService } from '../sales.service';
import { CustomersService } from '../customers.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  balancepending = 0;
  remainingmt = 0;
  details: any = {};
  useData: any = {};

  itemsList = [];
  keys = [];
  values = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private items: ItemsService,
    private sales: SalesService,
    private snackBar: MatSnackBar,
    private salesman: CustomersService,
    private ref: MatDialogRef<CustomerDetailsComponent>,
    private messages: MessagesService
  ) { }

  ngOnInit() {
    this.messages.currentMessage.subscribe(msg => {
      this.retreivePrev();
    });
    Object.keys(this.data).forEach(k => {
      this.useData[k] = this.data[k];
    });
    this.retreiveItems();
    this.retreivePrev();
    // tslint:disable-next-line:no-string-literal
    this.details['customer_id'] = this.useData.customer_id;
    // tslint:disable-next-line:no-string-literal
    this.details['name'] = this.useData.name;
    // tslint:disable-next-line:no-string-literal
    this.details['nic'] = this.useData.nic;
    // tslint:disable-next-line:no-string-literal
    this.details['contact_no'] = this.useData.contact_no;
    delete this.useData.customer_id;
    delete this.useData.name;
    delete this.useData.nic;
    delete this.useData.contact_no;
    this.keys = Object.keys(this.useData);
    this.values = Object.values(this.useData);
  }

  retreivePrev() {
    this.sales.getPrevBalance(this.details).subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        if (res.message.length > 0) {
          this.balancepending = res.message[0].remaining;
        }
      }
    });
    this.sales.getSalesEmptySpecific().subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        this.remainingmt = 0;
        res.message.forEach(e => {
          if (e.customer_id === this.details.customer_id) {
            this.remainingmt += e.quantity - e.returned;
          }
        });
      }
    });
  }

  retreiveItems() {
    this.items.getAll.subscribe(res => {
      if (!(res.error)) {
        this.itemsList = res.message;
      }
    });
  }

  capitalizeAndSpaceEach(str: string) {
    let retStr = '';
    const s = str.replace(/_/g, ' ');
    const useArr = s.split(' ');
    let item = [];
    useArr.forEach(a => {
      item = this.itemsList.filter(i => {
        try {
          if (parseInt(a.substring(1), 10) === i.item_id) {
            return i;
          }
        } catch (exc) { }
      });
      retStr += a.substring(0, 1).toUpperCase().concat(a.substring(1)).concat(' ');
    });
    if (item.length > 0) {
      return item[0].name;
    } else {
      return retStr;
    }
  }

  returnBalance() {
    this.salesman.clearAllBalance(this.details).subscribe(res => {
      this.snackBar.open(res.message, 'close');
      this.messages.changeMessage('salesman');
      this.ref.close();
    });
  }

}
