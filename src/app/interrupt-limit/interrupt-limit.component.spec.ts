import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptLimitComponent } from './interrupt-limit.component';

describe('InterruptLimitComponent', () => {
  let component: InterruptLimitComponent;
  let fixture: ComponentFixture<InterruptLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
