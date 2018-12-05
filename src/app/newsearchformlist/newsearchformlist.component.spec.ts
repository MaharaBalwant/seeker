import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsearchformlistComponent } from './newsearchformlist.component';

describe('NewsearchformlistComponent', () => {
  let component: NewsearchformlistComponent;
  let fixture: ComponentFixture<NewsearchformlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsearchformlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsearchformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
