import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-set-hdiscounts',
  templateUrl: './set-hdiscounts.component.html',
  styleUrls: ['./set-hdiscounts.component.css']
})
export class SetHDiscountsComponent implements OnInit {

  discountsSet = [];
  loaded = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<SetHDiscountsComponent>
  ) { }

  ngOnInit() {
    this.data.forEach(d => {
      this.discountsSet.push({
        item_id: d.item_id,
        hdiscount: 0
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
    this.ref.close(this.discountsSet);
  }

  cancel() {
    this.ref.close(null);
  }

}
