import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicStudiesUpdateComponent } from './manage-academic-studies-update.component';

describe('ManageAcademicStudiesUpdateComponent', () => {
  let component: ManageAcademicStudiesUpdateComponent;
  let fixture: ComponentFixture<ManageAcademicStudiesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicStudiesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicStudiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
