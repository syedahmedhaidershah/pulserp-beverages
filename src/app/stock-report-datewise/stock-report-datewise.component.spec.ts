import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReportDatewiseComponent } from './stock-report-datewise.component';

describe('StockReportDatewiseComponent', () => {
  let component: StockReportDatewiseComponent;
  let fixture: ComponentFixture<StockReportDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockReportDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockReportDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
