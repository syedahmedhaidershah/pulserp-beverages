import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { MatListModule, MatCheckboxModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatSelectModule, MatGridListModule, MatRippleModule, MatDialogModule, MatDividerModule, MatAutocompleteModule, MatExpansionModule, MatTableModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { InterceptorService } from './interceptor.service';
import { MessagesService } from './messages.service';
import { RouterLinksComponent } from './router-links/router-links.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HomeCol1Component } from './home-col1/home-col1.component';
import { SalesmenComponent } from './salesmen/salesmen.component';
import { CreateSalesmanComponent } from './create-salesman/create-salesman.component';
import { SetHDiscountsComponent } from './set-hdiscounts/set-hdiscounts.component';
import { SalesmanListComponent } from './salesman-list/salesman-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MakeASaleComponent } from './make-a-sale/make-a-sale.component';
import { InquireQuantityComponent } from './inquire-quantity/inquire-quantity.component';
import { QuickSalePrintComponent } from './quick-sale-print/quick-sale-print.component';
import { InvManagementComponent } from './inv-management/inv-management.component';
import { ReStockItemComponent } from './re-stock-item/re-stock-item.component';
import { EmptyAccountsComponent } from './empty-accounts/empty-accounts.component';
import { InterruptPromptComponent } from './interrupt-prompt/interrupt-prompt.component';
import { RentOutFormComponent } from './rent-out-form/rent-out-form.component';
import { RentReceiptComponent } from './rent-receipt/rent-receipt.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { OldSaleComponent } from './old-sale/old-sale.component';
import { EditHDisComponent } from './edit-hdis/edit-hdis.component';
import { SalesmanDatewiseComponent } from './salesman-datewise/salesman-datewise.component';
import { DeparturesComponent } from './departures/departures.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StockDatewiseComponent } from './stock-datewise/stock-datewise.component';
import { DatewiseStockComponent } from './datewise-stock/datewise-stock.component';
import { SalesReportDatewiseComponent } from './sales-report-datewise/sales-report-datewise.component';
import { StockReportDatewiseComponent } from './stock-report-datewise/stock-report-datewise.component';
import { ReturnCompanyComponent } from './return-company/return-company.component';
import { ReturnCompanyPromptComponent } from './return-company-prompt/return-company-prompt.component';
import { InterruptLimitComponent } from './interrupt-limit/interrupt-limit.component';

const erpRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'salesmen', component: SalesmenComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RouterLinksComponent,
    ReportingComponent,
    HomeCol1Component,
    SalesmenComponent,
    CreateSalesmanComponent,
    SetHDiscountsComponent,
    SalesmanListComponent,
    CustomerDetailsComponent,
    MakeASaleComponent,
    InquireQuantityComponent,
    QuickSalePrintComponent,
    InvManagementComponent,
    ReStockItemComponent,
    EmptyAccountsComponent,
    InterruptPromptComponent,
    RentOutFormComponent,
    RentReceiptComponent,
    SalesListComponent,
    OldSaleComponent,
    EditHDisComponent,
    SalesmanDatewiseComponent,
    DeparturesComponent,
    AccountsComponent,
    StockDatewiseComponent,
    DatewiseStockComponent,
    SalesReportDatewiseComponent,
    StockReportDatewiseComponent,
    ReturnCompanyComponent,
    ReturnCompanyPromptComponent,
    InterruptLimitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatRippleModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      erpRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    MessagesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SetHDiscountsComponent,
    CustomerDetailsComponent,
    MakeASaleComponent,
    InquireQuantityComponent,
    QuickSalePrintComponent,
    ReStockItemComponent,
    InterruptPromptComponent,
    RentOutFormComponent,
    RentReceiptComponent,
    OldSaleComponent,
    EditHDisComponent,
    DeparturesComponent,
    SalesReportDatewiseComponent,
    StockReportDatewiseComponent,
    ReturnCompanyPromptComponent,
    InterruptLimitComponent
  ]
})
export class AppModule { }
