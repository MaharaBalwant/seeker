import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerMessagesComponentComponent } from './seeker-messages-component.component';

describe('SeekerMessagesComponentComponent', () => {
  let component: SeekerMessagesComponentComponent;
  let fixture: ComponentFixture<SeekerMessagesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerMessagesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerMessagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
