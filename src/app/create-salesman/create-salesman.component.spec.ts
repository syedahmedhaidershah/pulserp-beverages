import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesmanComponent } from './create-salesman.component';

describe('CreateSalesmanComponent', () => {
  let component: CreateSalesmanComponent;
  let fixture: ComponentFixture<CreateSalesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
