import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesDeleteDialogComponent } from './manage-courses-delete-dialog.component';

describe('ManageCoursesDeleteDialogComponent', () => {
  let component: ManageCoursesDeleteDialogComponent;
  let fixture: ComponentFixture<ManageCoursesDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCoursesDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCoursesDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
