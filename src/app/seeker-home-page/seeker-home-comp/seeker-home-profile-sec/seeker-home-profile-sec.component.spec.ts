import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerHomeProfileSecComponent } from './seeker-home-profile-sec.component';

describe('SeekerHomeProfileSecComponent', () => {
  let component: SeekerHomeProfileSecComponent;
  let fixture: ComponentFixture<SeekerHomeProfileSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerHomeProfileSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerHomeProfileSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
