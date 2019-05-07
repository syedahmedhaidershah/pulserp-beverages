import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSelect, MatDialogRef, MatDialog } from '@angular/material';
import { FunctionsService } from '../functions.service';
import { ItemsService as InventoryService } from '../items.service';
import { SalesService } from '../sales.service';
import { CustomersService as SalesmanService } from '../customers.service';
import { MessagesService } from '../messages.service';
import { RentReceiptComponent } from '../rent-receipt/rent-receipt.component';

@Component({
  selector: 'app-rent-out-form',
  templateUrl: './rent-out-form.component.html',
  styleUrls: ['./rent-out-form.component.css']
})
export class RentOutFormComponent implements OnInit {

  rentPerDay = 0;

  invItems = [];
  selectedItem: any;

  customers = [];
  selectedCustomer: any;

  sellButtonState = false;

  rentOutForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private funct: FunctionsService,
    private inventory: InventoryService,
    private sales: SalesService,
    private salesman: SalesmanService,
    private ref: MatDialogRef<RentOutFormComponent>,
    private msg: MessagesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initForms();
    this.retreiveItems();
    this.retreiveCustomers();
    this.setListeners();
  }

  retreiveCustomers() {
    this.salesman.getAll().subscribe(data => {
      this.customers = data.message;
    });
  }

  setListeners() {
    this.rentOutForm.valueChanges.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      const useVal = this.rentOutForm.controls['quantity'].value;
      if (useVal !== '' && useVal !== null) {
        // tslint:disable-next-line:no-unused-expression
        this.sellButtonState = true;
        let total = this.selectedItem.cost * data.quantity;
        if (this.selectedItem.rental === 2) {
          total *= 24;
        } else if (this.selectedItem.rental === 3) {
          total /= 30;
        }
        this.rentPerDay = total;
      } else {
        this.sellButtonState = false;
        this.rentPerDay = 0;
      }
    });
  }

  initForms() {
    this.rentOutForm = this.fb.group({
      quantity: [{ value: '', disabled: true }, Validators.required],
      paid: [{ value: '', disabled: true }, Validators.required],
      contact: [{ value: '', disabled: true }]
    });
  }

  retreiveItems() {
    this.inventory.getAllRentalItems.subscribe(res => {
      if (res.error) {
        this.matSnackBar.open(res.message, 'close');
      } else {
        this.invItems = res.message;
      }
    });
  }

  get sellButtonDisabled() {
    return this.sellButtonState;
  }

  saveItem(select: MatSelect) {
    this.selectedItem = this.invItems.filter((i: any) => {
      if (i.item_id === parseInt(select.value, 10)) {
        return i;
      }
    })[0];
    // tslint:disable-next-line:no-string-literal
    this.rentOutForm.controls['quantity'].enable();
    // tslint:disable-next-line:no-string-literal
    this.rentOutForm.controls['paid'].enable();
    // tslint:disable-next-line:no-string-literal
    this.rentOutForm.controls['contact'].enable();
  }

  saveCustomer(select: MatSelect) {
    this.selectedCustomer = this.customers.filter((i: any) => {
      if (i.customer_id === parseInt(select.value, 10)) {
        return i;
      }
    })[0];
  }

  rentOut() {
    if (this.selectedCustomer === undefined) {
      this.matSnackBar.open('Please select all of the fields', 'close');
      return false;
    }
    if (this.rentOutForm.valid) {
      // tslint:disable-next-line:no-string-literal
      let paidVal = this.rentOutForm.controls['paid'].value;
      if (paidVal === '' || paidVal === null) {
        paidVal = '0';
      }
      const forward = {
        item_id: this.selectedItem.item_id,
        // tslint:disable-next-line:no-string-literal
        quantity: parseInt(this.rentOutForm.controls['quantity'].value, 10),
        rpd: this.rentPerDay,
        paid: paidVal,
        customer_id: this.selectedCustomer.customer_id,
        // tslint:disable-next-line:no-string-literal
        contact: this.rentOutForm.controls['contact'].value
      };
      this.sales.rentOut(forward).subscribe(res => {
        this.matSnackBar.open(res.message, 'close');
        if (!(res.error)) {
          this.msg.changeMessage('rentUpdated');
          this.dialog.open(RentReceiptComponent, {
            height: (window.innerHeight - 10).toString().concat('px'),
            width: (window.innerWidth - 10).toString().concat('px'),
            panelClass: 'md-p-0',
            data: {
              // tslint:disable-next-line:object-literal-shorthand
              forward: forward,
              item: this.selectedItem,
              customer: this.selectedCustomer
            }
          });
          this.ref.close();
        }
      });
    } else {
      this.matSnackBar.open('Please select all of the fields', 'close');
    }
  }
}
