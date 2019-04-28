import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SetHDiscountsComponent } from '../set-hdiscounts/set-hdiscounts.component';
import { CustomersService } from '../customers.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-create-salesman',
  templateUrl: './create-salesman.component.html',
  styleUrls: ['./create-salesman.component.css']
})
export class CreateSalesmanComponent implements OnInit {

  createSalesmanForm: FormGroup;
  itemsList = [];
  hdiscountsList = [];

  controlLabels = {
    name: 'Name',
    nic: 'NIC#',
    contact_no: 'Contact No',
  };

  constructor(
    private fb: FormBuilder,
    private items: ItemsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private customers: CustomersService,
    private messages: MessagesService
  ) { }

  ngOnInit() {
    this.initForms();
    this.retreiveItems();
  }

  initForms() {
    this.createSalesmanForm = this.fb.group({
      name: ['', Validators.required],
      nic: [''],
      contact_no: ['']
    });
  }

  retreiveItems() {
    this.items.getAll.subscribe(res => {
      this.itemsList = res.message;
    });
  }

  get formKeys() {
    return Object.keys(this.createSalesmanForm.controls);
  }

  promptHDiscounts() {
    const ref = this.dialog.open(SetHDiscountsComponent, {
      height: (window.innerHeight - 100).toString().concat('px'),
      width: '60%',
      panelClass: 'md-p-0',
      data: this.itemsList,
      disableClose: true
    });

    ref.afterClosed().subscribe(data => {
      if (data !== null) {
        this.hdiscountsList = data;
      }
    });
  }

  addSalesman() {
    if (this.createSalesmanForm.valid && this.hdiscountsList.length > 0) {
      const forward = this.createSalesmanForm.value;
      this.hdiscountsList.forEach(h => {
        forward['h'.concat(h.item_id.toString())] = h.hdiscount;
      });
      this.customers.insert(forward).subscribe(res => {
        if (!(res.error)) {
          this.createSalesmanForm.reset();
          this.hdiscountsList = [];
        } else {
          this.messages.changeMessage('salesman');
        }
        this.snackBar.open(res.message, 'close');
      });
    } else {
      return false;
    }
  }

  revokeHdiscounts() {
    this.hdiscountsList = [];
  }

}
