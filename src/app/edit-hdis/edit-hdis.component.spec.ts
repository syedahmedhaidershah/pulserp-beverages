import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHDisComponent } from './edit-hdis.component';

describe('EditHDisComponent', () => {
  let component: EditHDisComponent;
  let fixture: ComponentFixture<EditHDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
