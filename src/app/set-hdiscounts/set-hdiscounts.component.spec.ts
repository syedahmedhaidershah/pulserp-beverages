import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetHDiscountsComponent } from './set-hdiscounts.component';

describe('SetHDiscountsComponent', () => {
  let component: SetHDiscountsComponent;
  let fixture: ComponentFixture<SetHDiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetHDiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetHDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
