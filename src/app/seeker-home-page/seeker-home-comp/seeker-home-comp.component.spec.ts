import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerHomeCompComponent } from './seeker-home-comp.component';

describe('SeekerHomeCompComponent', () => {
  let component: SeekerHomeCompComponent;
  let fixture: ComponentFixture<SeekerHomeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerHomeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerHomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
