import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectsDetailComponent } from './manage-projects-detail.component';

describe('ManageProjectsDetailComponent', () => {
  let component: ManageProjectsDetailComponent;
  let fixture: ComponentFixture<ManageProjectsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProjectsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
