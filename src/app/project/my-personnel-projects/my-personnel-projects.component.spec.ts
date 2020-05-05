import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonnelProjectsComponent } from './my-personnel-projects.component';

describe('MyPersonnelProjectsComponent', () => {
  let component: MyPersonnelProjectsComponent;
  let fixture: ComponentFixture<MyPersonnelProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPersonnelProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonnelProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
