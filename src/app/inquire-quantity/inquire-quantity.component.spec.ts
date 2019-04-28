import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireQuantityComponent } from './inquire-quantity.component';

describe('InquireQuantityComponent', () => {
  let component: InquireQuantityComponent;
  let fixture: ComponentFixture<InquireQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
