import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSalePrintComponent } from './quick-sale-print.component';

describe('QuickSalePrintComponent', () => {
  let component: QuickSalePrintComponent;
  let fixture: ComponentFixture<QuickSalePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSalePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSalePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
