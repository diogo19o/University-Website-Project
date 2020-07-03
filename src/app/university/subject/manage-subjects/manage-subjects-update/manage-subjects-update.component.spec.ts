import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsUpdateComponent } from './manage-subjects-update.component';

describe('ManageSubjectsUpdateComponent', () => {
  let component: ManageSubjectsUpdateComponent;
  let fixture: ComponentFixture<ManageSubjectsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
