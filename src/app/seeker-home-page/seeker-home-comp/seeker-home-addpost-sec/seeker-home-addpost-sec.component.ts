import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserserviceService } from '../../.././userservice.service';

@Component({
  selector: 'app-seeker-home-addpost-sec',
  templateUrl: './seeker-home-addpost-sec.component.html',
  styleUrls: ['./seeker-home-addpost-sec.component.css']
})
export class SeekerHomeAddpostSecComponent implements OnInit {
  public posts:any = [];
  public loading:boolean = false;
  private newPostText:string;
  @Output() myAddNewPostEvent = new EventEmitter<any>();
  constructor(private userService : UserserviceService) { }

  ngOnInit() {
  }

  addNewPost(postValue:string){
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userService.addNewPost(personID, postValue).subscribe(response =>{
      if(response.json()==1)
      {
        this.newPostText = '';
        //console.log(response.json());
        this.myAddNewPostEvent.emit(true);
        this.loading = true;
        /** Blank textbox after adding new post **/
      }
    });
  }

}
