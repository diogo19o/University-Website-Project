import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeachersDetailsComponent } from './manage-teachers-details.component';

describe('ManageTeachersDetailsComponent', () => {
  let component: ManageTeachersDetailsComponent;
  let fixture: ComponentFixture<ManageTeachersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeachersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeachersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
