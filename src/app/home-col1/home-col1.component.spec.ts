import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCol1Component } from './home-col1.component';

describe('HomeCol1Component', () => {
  let component: HomeCol1Component;
  let fixture: ComponentFixture<HomeCol1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCol1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCol1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
