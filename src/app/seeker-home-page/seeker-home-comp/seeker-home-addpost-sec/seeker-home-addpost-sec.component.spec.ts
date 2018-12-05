import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerHomeAddpostSecComponent } from './seeker-home-addpost-sec.component';

describe('SeekerHomeAddpostSecComponent', () => {
  let component: SeekerHomeAddpostSecComponent;
  let fixture: ComponentFixture<SeekerHomeAddpostSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerHomeAddpostSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerHomeAddpostSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
