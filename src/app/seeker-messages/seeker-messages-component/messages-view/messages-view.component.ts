import { UserserviceService } from './../../../userservice.service';
import { SharedService } from './../../../shared.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.css']
})
export class MessagesViewComponent implements OnInit {
  
  public messangerId:number;
  public newMessageText:string;
  public senderID:any = 0;
  public updateRecord:any;
  public messageArray:any = [];
  public pid:number;

  @Input('event') event: Event;

  constructor(private SharedService : SharedService,
              private userService: UserserviceService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.event){
      this.pid = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
      console.log(this.event);
    }

    if(this.updateRecord || this.event){
      var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
      this.userService.getMessagesSelectedPerson(personID, this.event).subscribe(response =>{
        if(response.json())
        {
          console.log(response.json());
          console.log("pid",this.pid);
          console.log("senderID",this.senderID);
          this.messageArray = response.json();
        }
        else
        {
          this.messageArray = [];
        }
      });
    }
  }

  sendAddMessages(){
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userService.addMessages(personID, this.event, this.newMessageText).subscribe(response =>{
      if(response.json()==1)
      {
        console.log(response.json());
        this.updateRecord = 1;
        var obj = {};
        obj["sender_id"] = personID;
        obj["receiver_id"] = this.event;
        obj["message"] = this.newMessageText;
        this.messageArray.push(obj);
        this.newMessageText = '';
      }
    });

  }


}
