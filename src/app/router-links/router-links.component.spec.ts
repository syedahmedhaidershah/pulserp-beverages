import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinksComponent } from './router-links.component';

describe('RouterLinksComponent', () => {
  let component: RouterLinksComponent;
  let fixture: ComponentFixture<RouterLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
