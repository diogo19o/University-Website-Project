import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertificationsDeleteDialogComponent } from './manage-certifications-delete-dialog.component';

describe('ManageCertificationsDeleteDialogComponent', () => {
  let component: ManageCertificationsDeleteDialogComponent;
  let fixture: ComponentFixture<ManageCertificationsDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCertificationsDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCertificationsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
