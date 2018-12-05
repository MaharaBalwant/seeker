import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-home-comp',
  templateUrl: './seeker-home-comp.component.html',
  styleUrls: ['./seeker-home-comp.component.css']
})
export class SeekerHomeCompComponent implements OnInit {

  addPostFlagInc = 0;
  constructor() { }

  ngOnInit() {
  }

  onAddNewPostEvent(agreed: boolean) {
    if(agreed == true){
      this.addPostFlagInc++;
    }
  }

}
