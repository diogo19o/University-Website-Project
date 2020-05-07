import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectsUpdateComponent } from './manage-projects-update.component';

describe('ManageProjectsComponent', () => {
  let component: ManageProjectsUpdateComponent;
  let fixture: ComponentFixture<ManageProjectsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProjectsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
