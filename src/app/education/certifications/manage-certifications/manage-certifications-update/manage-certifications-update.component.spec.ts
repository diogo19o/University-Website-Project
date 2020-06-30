import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertificationsUpdateComponent } from './manage-certifications-update.component';

describe('ManageCertificationsUpdateComponent', () => {
  let component: ManageCertificationsUpdateComponent;
  let fixture: ComponentFixture<ManageCertificationsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCertificationsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCertificationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
