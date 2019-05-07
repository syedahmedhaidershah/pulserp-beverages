import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportDatewiseComponent } from './sales-report-datewise.component';

describe('SalesReportDatewiseComponent', () => {
  let component: SalesReportDatewiseComponent;
  let fixture: ComponentFixture<SalesReportDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReportDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
