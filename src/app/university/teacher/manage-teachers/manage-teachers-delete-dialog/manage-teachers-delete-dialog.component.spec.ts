import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeachersDeleteDialogComponent } from './manage-teachers-delete-dialog.component';

describe('ManageTeachersDeleteDialogComponent', () => {
  let component: ManageTeachersDeleteDialogComponent;
  let fixture: ComponentFixture<ManageTeachersDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeachersDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeachersDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
