import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseStockComponent } from './datewise-stock.component';

describe('DatewiseStockComponent', () => {
  let component: DatewiseStockComponent;
  let fixture: ComponentFixture<DatewiseStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
