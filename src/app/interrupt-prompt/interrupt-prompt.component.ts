import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-interrupt-prompt',
  templateUrl: './interrupt-prompt.component.html',
  styleUrls: ['./interrupt-prompt.component.css']
})
export class InterruptPromptComponent implements OnInit {

  quantityForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private ref: MatDialogRef<InterruptPromptComponent>
  ) { }

  ngOnInit() {
    this.quantityForm = this.fb.group({
      quantity: [0, Validators.required]
    });
    // tslint:disable-next-line:no-string-literal
    this.quantityForm.controls['quantity'].patchValue(this.data.value.toString());
    // tslint:disable-next-line:no-string-literal
    this.quantityForm.controls['quantity'].valueChanges.subscribe(val => {
      if (val > this.data.value) {
        // tslint:disable-next-line:no-string-literal
        this.quantityForm.controls['quantity'].setValue(this.data.value);
      }
    });
  }

  retRef() {
    // tslint:disable-next-line:no-string-literal
    this.ref.close(parseInt(this.quantityForm.controls['quantity'].value, 10));
  }
}
