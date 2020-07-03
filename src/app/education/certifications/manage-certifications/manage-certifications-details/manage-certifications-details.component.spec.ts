import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertificationsDetailsComponent } from './manage-certifications-details.component';

describe('ManageCertificationsDetailsComponent', () => {
  let component: ManageCertificationsDetailsComponent;
  let fixture: ComponentFixture<ManageCertificationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCertificationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCertificationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
