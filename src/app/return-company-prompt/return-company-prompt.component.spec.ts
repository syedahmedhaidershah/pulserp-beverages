import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCompanyPromptComponent } from './return-company-prompt.component';

describe('ReturnCompanyPromptComponent', () => {
  let component: ReturnCompanyPromptComponent;
  let fixture: ComponentFixture<ReturnCompanyPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnCompanyPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnCompanyPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
