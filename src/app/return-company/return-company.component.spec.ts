import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCompanyComponent } from './return-company.component';

describe('ReturnCompanyComponent', () => {
  let component: ReturnCompanyComponent;
  let fixture: ComponentFixture<ReturnCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
