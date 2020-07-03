import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsDetailsComponent } from './manage-subjects-details.component';

describe('ManageSubjectsDetailsComponent', () => {
  let component: ManageSubjectsDetailsComponent;
  let fixture: ComponentFixture<ManageSubjectsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
