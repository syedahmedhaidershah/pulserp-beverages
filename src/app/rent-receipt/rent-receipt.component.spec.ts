import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentReceiptComponent } from './rent-receipt.component';

describe('RentReceiptComponent', () => {
  let component: RentReceiptComponent;
  let fixture: ComponentFixture<RentReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
