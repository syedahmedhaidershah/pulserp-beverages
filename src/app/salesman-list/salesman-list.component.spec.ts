import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanListComponent } from './salesman-list.component';

describe('SalesmanListComponent', () => {
  let component: SalesmanListComponent;
  let fixture: ComponentFixture<SalesmanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
