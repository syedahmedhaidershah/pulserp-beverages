import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanDatewiseComponent } from './salesman-datewise.component';

describe('SalesmanDatewiseComponent', () => {
  let component: SalesmanDatewiseComponent;
  let fixture: ComponentFixture<SalesmanDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
