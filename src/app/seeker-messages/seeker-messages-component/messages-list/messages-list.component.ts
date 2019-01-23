import { SharedService } from './../../../shared.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  public listArr:any = [];
  public click:number = 0;
  @Output() eventClicked = new EventEmitter<any>();
  
  constructor(private SharedService: SharedService) { }

  ngOnInit() {
    this.listArr = this.SharedService.followerList.value;
    //this.eventClicked.emit(2);  //On page load get latest messages by user id
    //this.clickToMsgUser(2);
  }

  clickToMsgUser(clickId){
    this.click = clickId;
    this.eventClicked.emit(clickId);
  }

}
