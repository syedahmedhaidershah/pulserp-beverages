import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inquire-quantity',
  templateUrl: './inquire-quantity.component.html',
  styleUrls: ['./inquire-quantity.component.css']
})
export class InquireQuantityComponent implements OnInit {

  quantityForm: FormGroup;

  alertAud: HTMLAudioElement = new Audio('../../assets/aud/alert.mp3');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<InquireQuantityComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.quantityForm = this.fb.group({
      quantity: ['']
    });
    // tslint:disable-next-line:no-string-literal
    this.quantityForm.controls['quantity'].valueChanges.subscribe(val => {
      if (val > this.data.quantity) {
        // tslint:disable-next-line:no-string-literal
        this.quantityForm.controls['quantity'].setValue(this.data.quantity);
        this.alertAud.load();
        this.alertAud.play();
      }
    });
  }

  changeVal(value) {
    // tslint:disable-next-line:no-string-literal
    const qc = this.quantityForm.controls['quantity'];
    if (qc.value === '' || qc.value === null) {
      qc.setValue('');
      return false;
    }
    const val = parseInt(qc.value, 10);
    // console.log(val, value);
    if ((val + value) > this.data.quantity) {
      qc.setValue(this.data.quantity);
      this.alertAud.load();
      this.alertAud.play();
    } else if ((val + value) < 0) {
      qc.setValue(0);
      this.alertAud.load();
      this.alertAud.play();
    } else {
      qc.setValue(val + value);
    }
  }

  closeRef(val) {
    // tslint:disable-next-line:no-string-literal
    const qc = this.quantityForm.controls['quantity'];
    if (qc.value === '' || qc.value === null) {
      this.ref.close(0);
    } else if (val > 0) {
      this.ref.close(
        parseInt(qc.value, 10)
      );
    } else {
      this.ref.close(0);
    }
  }

}
