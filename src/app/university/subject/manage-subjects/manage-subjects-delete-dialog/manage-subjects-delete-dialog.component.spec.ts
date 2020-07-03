import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsDeleteDialogComponent } from './manage-subjects-delete-dialog.component';

describe('ManageSubjectsDeleteDialogComponent', () => {
  let component: ManageSubjectsDeleteDialogComponent;
  let fixture: ComponentFixture<ManageSubjectsDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectsDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
