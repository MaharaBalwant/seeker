import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderpopupComponent } from './renderpopup.component';

describe('RenderpopupComponent', () => {
  let component: RenderpopupComponent;
  let fixture: ComponentFixture<RenderpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
