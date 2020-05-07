import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectsDeleteDialogComponent } from './manage-projects-delete-dialog.component';

describe('ManageProjectsDeleteDialogComponent', () => {
  let component: ManageProjectsDeleteDialogComponent;
  let fixture: ComponentFixture<ManageProjectsDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProjectsDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
