import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesDetailsComponent } from './manage-courses-details.component';

describe('ManageCoursesDetailsComponent', () => {
  let component: ManageCoursesDetailsComponent;
  let fixture: ComponentFixture<ManageCoursesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCoursesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCoursesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
