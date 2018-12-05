import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerHomeShowpostsSecComponent } from './seeker-home-showposts-sec.component';

describe('SeekerHomeShowpostsSecComponent', () => {
  let component: SeekerHomeShowpostsSecComponent;
  let fixture: ComponentFixture<SeekerHomeShowpostsSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerHomeShowpostsSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerHomeShowpostsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
