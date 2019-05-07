import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { InterruptPromptComponent } from '../interrupt-prompt/interrupt-prompt.component';
import { SalesService } from '../sales.service';
import { MessagesService } from '../messages.service';
import { QuickSalePrintComponent } from '../quick-sale-print/quick-sale-print.component';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  itemsList = [];
  remainingMT = 0;

  pendingBalance = 0;

  status = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public sale: any,
    private dialog: MatDialog,
    private sales: SalesService,
    private messages: MessagesService,
    private snackbar: MatSnackBar,
    private items: ItemsService
  ) { }

  ngOnInit() {
    this.checkStatus();
    this.checkBalance();
    this.retreiveItems();
    this.checkMT();
  }

  checkMT() {
    this.sale.data.forEach(v => {
      this.remainingMT += v.quantity - v.returned;
    });
  }

  retreiveItems() {
    this.items.getAll.subscribe(res => {
      if (!(res.error)) {
        this.itemsList = res.message;
      }
    });
  }

  checkBalance() {
    this.sale.data.forEach(v => {
      this.pendingBalance += v.balance;
    });
  }

  checkStatus() {
    this.status = true;
    this.sale.data.forEach(v => {
      if (v.complete === 0) {
        this.status = false;
      }
    });
  }

  returnCrates(s) {
    const dialogRef2 = this.dialog.open(InterruptPromptComponent, {
      height: 'auto',
      width: '400px',
      data: {
        message: 'Crates to return',
        value: (s.quantity - s.returned)
      }
    });

    dialogRef2.afterClosed().subscribe(value => {
      if (value > 0) {
        s.toreturn = value;
        this.sales.returnCrate(s).subscribe(response => {
          if (!(response.error)) {
            this.messages.changeMessage('inventory');
          }
          this.sale.data = this.sale.data.filter(sobj => {
            if (sobj.item_id === s.item_id) {
              sobj.quantity -= value;
            }
            return sobj;
          });
          this.checkMT();
          this.snackbar.open(response.message, 'close');
        });
      }
    });
  }

  returnMT(s) {
    const dialogRef2 = this.dialog.open(InterruptPromptComponent, {
      height: 'auto',
      width: '400px',
      data: {
        message: 'MT Quantity to Clear',
        value: (s.quantity - s.returned)
      }
    });

    dialogRef2.afterClosed().subscribe(value => {
      if (value > 0) {
        s.toclear = value;
        this.sales.clearEmpty(s).subscribe(response => {
          if (!(response.error)) {
            this.messages.changeMessage('inventory');
          }
          this.sale.data = this.sale.data.filter(sobj => {
            if (sobj.item_id === s.item_id) {
              sobj.returned += value;
            }
            return sobj;
          });
          this.checkMT();
          this.snackbar.open(response.message, 'close');
        });
      }
    });
  }

  completeSale() {
    this.sales.completeSale(this.sale.data[0]).subscribe(res => {
      if (!(res.error)) {
        this.sale.data.forEach(v => {
          v.complete = 1;
        });
        this.checkStatus();
      }
      this.snackbar.open(res.message, 'close');
      this.messages.changeMessage('inventory');
    });
  }

  clearBalance() {
    this.sales.autoDepositOnSale({
      date_time: this.sale.data[0].date_time
    }).subscribe(res => {
      if (!(res.error)) {
        this.pendingBalance = 0;
        this.sale.data.forEach(v => {
          v.balance = 0;
        });
        this.checkBalance();
      }
      this.snackbar.open(res.message, 'close');
      this.messages.changeMessage('inventory');
    });
  }

  printSale() {
    this.sales.getDepartureDetails(this.sale.data[0]).subscribe(res => {
      if (res.error) {
        this.snackbar.open(res.message, 'close');
      } else {
        const useVal = JSON.parse(res.message[0].value);
        useVal.paid = useVal.bill;
        useVal.prev = this.pendingBalance;
        useVal.mt = this.remainingMT;
        console.log(useVal);
        const ref = this.dialog.open(QuickSalePrintComponent, {
          height: (window.innerHeight).toString().concat('px'),
          width: (window.innerWidth).toString().concat('px'),
          maxWidth: (window.innerWidth).toString().concat('px'),
          panelClass: 'md-p-0',
          data: useVal
        });
      }
    });
  }

  depositAmount() {
    const dialogRef2 = this.dialog.open(InterruptPromptComponent, {
      height: 'auto',
      width: '400px',
      data: {
        message: 'Amount deposited (PKR)',
        value: this.pendingBalance
      }
    });

    dialogRef2.afterClosed().subscribe(value => {
      if (value > 0) {
        this.sale.toclear = value;
        this.sales.depositOnSale(this.sale).subscribe(response => {
          if (!(response.error)) {
            this.messages.changeMessage('inventory');
          }
          this.pendingBalance -= value;
          this.sale.data.forEach(v => {
            if (value > v.balance) {
              v.deposit += v.balance;
              value -= v.balance;
              v.balance = 0;
            } else {
              v.deposit += value;
              v.balance -= value;
              value = 0;
            }
          });
          this.checkStatus();
          this.checkMT();
          this.snackbar.open(response.message, 'close');
        });
      }
    });
  }
}
