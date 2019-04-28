import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { SalesService } from '../sales.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InterruptPromptComponent } from '../interrupt-prompt/interrupt-prompt.component';

@Component({
  selector: 'app-empty-accounts',
  templateUrl: './empty-accounts.component.html',
  styleUrls: ['./empty-accounts.component.css']
})
export class EmptyAccountsComponent implements OnInit {

  customersEmpty = [];

  constructor(
    private messages: MessagesService,
    private salesServ: SalesService,
    private matDialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.messages.currentMessage.subscribe(m => {
      if (m === 'inventory') {
        this.retreiveCE();
      }
    });
    this.retreiveCE();
  }

  retreiveCE() {
    this.salesServ.getSalesEmptySpecific().subscribe(res => {
      if (!(res.error)) {
        const push: any = {};
        res.message.forEach(v => {
          if (push.hasOwnProperty(v.customer_id)) {
            push[v.customer_id].data.push(v);
          } else {
            push[v.customer_id] = {};
            push[v.customer_id].name = v.name;
            push[v.customer_id].data = [];
            push[v.customer_id].data.push(v);
          }
        });
        this.customersEmpty = [];
        Object.values(push).forEach(val => {
          this.customersEmpty.push(val);
        });
        // this.customersEmpty = res.message;
      }
    });
  }

  payAndReturn(ce) {
    const dialogRef2 = this.matDialog.open(InterruptPromptComponent, {
      height: 'auto',
      width: '400px',
      data: (ce.quantity - ce.returned)
    });

    dialogRef2.afterClosed().subscribe(value => {
      if (value > 0) {
        ce.toclear = value;
        this.salesServ.clearEmpty(ce).subscribe(response => {
          if (!(response.error)) {
            this.messages.changeMessage('inventory');
          }
          this.snackbar.open(response.message, 'close');
        });
      }
    });
   }

  getTotalEmpty(arr) {
    let total = 0;
    arr.forEach(v => {
      total += v.quantity - v.returned;
    });
    return total;
  }
}
