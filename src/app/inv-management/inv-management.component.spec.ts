import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvManagementComponent } from './inv-management.component';

describe('InvManagementComponent', () => {
  let component: InvManagementComponent;
  let fixture: ComponentFixture<InvManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
