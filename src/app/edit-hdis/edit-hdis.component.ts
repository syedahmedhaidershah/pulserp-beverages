import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CustomersService } from '../customers.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-edit-hdis',
  templateUrl: './edit-hdis.component.html',
  styleUrls: ['./edit-hdis.component.css']
})
export class EditHDisComponent implements OnInit {

  discountsSet = [];
  loaded = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditHDisComponent>,
    private salesman: CustomersService,
    private snackbar: MatSnackBar,
    private messages: MessagesService
  ) { }

  ngOnInit() {
    this.data.items.forEach(d => {
      this.discountsSet.push({
        item_id: d.item_id,
        hdiscount: this.data.data['h'.concat(d.item_id.toString())]
      });
    });
    this.loaded = true;
  }

  save() {
    this.discountsSet = this.discountsSet.map(d => {
      const el: any = document.getElementById('item'.concat(d.item_id.toString()));
      d.hdiscount = parseInt(el.value, 10);
      return d;
    });
    this.salesman.updateHDis({
      data: this.discountsSet,
      customer_id: this.data.details.customer_id
    }).subscribe(res => {
      this.messages.changeMessage('salesman');
      this.snackbar.open(res.message, 'close');
      this.ref.close(-200);
    });
  }

  cancel() {
    this.ref.close(null);
  }

}
