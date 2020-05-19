import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertificationsComponent } from './manage-certifications.component';

describe('ManageCertificationsComponent', () => {
  let component: ManageCertificationsComponent;
  let fixture: ComponentFixture<ManageCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
