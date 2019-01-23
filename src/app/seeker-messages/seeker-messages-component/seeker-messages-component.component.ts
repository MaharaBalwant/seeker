import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seeker-messages-component',
  templateUrl: './seeker-messages-component.component.html',
  styleUrls: ['./seeker-messages-component.component.css']
})
export class SeekerMessagesComponentComponent implements OnInit {

  public clickedEvent: Event;
  
  constructor() { }

  ngOnInit() {
  }
  
  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

}
