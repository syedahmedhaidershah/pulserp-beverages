import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';
import { MatSelect, MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-return-company-prompt',
  templateUrl: './return-company-prompt.component.html',
  styleUrls: ['./return-company-prompt.component.css']
})
export class ReturnCompanyPromptComponent implements OnInit {
  retFrom: FormGroup;
  itemsList = [];
  selectedItem = null;

  alertAud: HTMLAudioElement = new Audio('../../assets/aud/alert.mp3');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private items: ItemsService,
    private snackbar: MatSnackBar,
    private ref: MatDialogRef<ReturnCompanyPromptComponent>
  ) { }

  ngOnInit() {
    this.retFrom = this.fb.group({
      amount: [0, Validators.required]
    });
    this.items.getAll.subscribe(res => {
      if (res.error === false) {
        this.itemsList = res.message;
        this.selectedItem = this.itemsList.filter(i => {
          if (i.item_id === this.data) {
            return i;
          }
        })[0];
      }
    });
    this.retFrom.controls.amount.valueChanges.subscribe(v => {
      const useVal = parseInt(v, 10);
      if (v > this.selectedItem.empty_store) {
        this.snackbar.open(`You do not have ${v} of ${this.selectedItem.name} in stock.`);
        this.retFrom.controls.amount.setValue(this.selectedItem.empty_store);
        this.alertAud.load();
        this.alertAud.play();
      }
    });
  }

  typeof(o) {
    return typeof (o);
  }

  selectItem(s: MatSelect) {
    this.selectedItem = this.itemsList.filter(i => {
      if (i.item_id === parseInt(s.value, 10)) {
        return i;
      }
    })[0];
  }

  returnToCompany() {
    if (this.retFrom.valid) {
      this.items.returnToCompany({
        item_id: this.selectedItem.item_id,
        quantity: this.retFrom.controls.amount.value
      }).subscribe(res => {
        this.snackbar.open(res.message, 'close');
        this.ref.close();
      });
    }
  }

}
