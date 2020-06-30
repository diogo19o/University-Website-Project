import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcademicStudiesComponent } from './my-academic-studies.component';

describe('MyAcademicStudiesComponent', () => {
  let component: MyAcademicStudiesComponent;
  let fixture: ComponentFixture<MyAcademicStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAcademicStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAcademicStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
