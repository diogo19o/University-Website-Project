import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeachersUpdateComponent } from './manage-teachers-update.component';

describe('ManageTeachersUpdateComponent', () => {
  let component: ManageTeachersUpdateComponent;
  let fixture: ComponentFixture<ManageTeachersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeachersUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeachersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
