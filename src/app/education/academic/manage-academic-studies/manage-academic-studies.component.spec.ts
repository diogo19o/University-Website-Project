import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicStudiesComponent } from './manage-academic-studies.component';

describe('ManageAcademicStudiesComponent', () => {
  let component: ManageAcademicStudiesComponent;
  let fixture: ComponentFixture<ManageAcademicStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
