import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { MessagesService } from '../messages.service';
import { SalesService } from '../sales.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InterruptPromptComponent } from '../interrupt-prompt/interrupt-prompt.component';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  itemsList = [];

  mtCount = 0;
  cashInStore = 0;
  cashInBank = 0;

  constructor(
    private items: ItemsService,
    private messages: MessagesService,
    private sales: SalesService,
    private dialog: MatDialog,
    private accounts: AccountsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.messages.currentMessage.subscribe(res => {
      if (res === 'inventory') {
        this.retreiveItems();
        this.retreiveSales();
      }
      this.getCapital();
    });
    this.retreiveItems();
    this.retreiveSales();
    this.getCapital();
  }

  getCapital() {
    this.accounts.getCapital().subscribe(res => {
      if (res.error) {
        this.snackBar.open(res.message, 'close');
      } else {
        this.cashInStore = res.message[0].store;
        this.cashInBank = res.message[0].bank;
      }
    })
  }

  retreiveSales() {
    this.sales.getAllSalesDetails().subscribe(res => {
      if (res.error === false) {
        this.cashInStore = 0;
        res.message.forEach(s => {
          s.data.forEach(d => {
            this.cashInStore += d.deposit;
          });
        });
      }
    });
  }

  retreiveItems() {
    this.items.getAll.subscribe(res => {
      if (res.error === false) {
        this.itemsList = res.message;
        this.mtCount = 0;
        this.itemsList.forEach(i => {
          this.mtCount += i.empty_account;
        });
      }
    });
  }

  transferToBank() {
    const dialogRef = this.dialog.open(InterruptPromptComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'md-p-0',
      data: {
        message: 'Transfer from Store to Bank',
        value: this.cashInStore
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.accounts.transferToBank({
        amount: parseInt(res, 10)
      }).subscribe(response => {
        this.snackBar.open(response.message, 'close');
        this.messages.changeMessage('account');
      });
    });
  }

  transferToStore() {
    const dialogRef = this.dialog.open(InterruptPromptComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'md-p-0',
      data: {
        message: 'Transfer from Bank to Store',
        value: this.cashInBank
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.accounts.transferToStore({
        amount: parseInt(res, 10)
      }).subscribe(response => {
        this.snackBar.open(response.message, 'close');
        this.messages.changeMessage('account');
      });
    });
  }

}
