import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesUpdateComponent } from './manage-courses-update.component';

describe('ManageCoursesUpdateComponent', () => {
  let component: ManageCoursesUpdateComponent;
  let fixture: ComponentFixture<ManageCoursesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCoursesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCoursesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
