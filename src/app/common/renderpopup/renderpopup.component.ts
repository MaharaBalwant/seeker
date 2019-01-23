import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderpopup',
  templateUrl: './renderpopup.component.html',
  styleUrls: ['./renderpopup.component.css']
})
export class RenderpopupComponent implements OnInit {

  constructor() { }
  public display:string = 'none';
  ngOnInit() {
  }

  openPopupRender(){
    this.display = 'block';
    console.log("Calling this HTML from mychoice");
  }

}
