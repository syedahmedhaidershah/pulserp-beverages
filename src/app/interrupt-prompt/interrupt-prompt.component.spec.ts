import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptPromptComponent } from './interrupt-prompt.component';

describe('InterruptPromptComponent', () => {
  let component: InterruptPromptComponent;
  let fixture: ComponentFixture<InterruptPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
