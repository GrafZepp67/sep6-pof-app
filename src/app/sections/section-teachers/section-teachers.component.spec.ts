import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeachersComponent } from './section-teachers.component';

describe('SectionTeachersComponent', () => {
  let component: SectionTeachersComponent;
  let fixture: ComponentFixture<SectionTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
