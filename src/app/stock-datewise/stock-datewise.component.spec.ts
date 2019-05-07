import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDatewiseComponent } from './stock-datewise.component';

describe('StockDatewiseComponent', () => {
  let component: StockDatewiseComponent;
  let fixture: ComponentFixture<StockDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
