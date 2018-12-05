import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../../.././userservice.service';

@Component({
  selector: 'app-seeker-home-showposts-sec',
  templateUrl: './seeker-home-showposts-sec.component.html',
  styleUrls: ['./seeker-home-showposts-sec.component.css']
})
export class SeekerHomeShowpostsSecComponent implements OnInit {
  public posts:any = [];
  @Input('addPostFlagInc') addNewPostRecord: number;

  constructor(private userService : UserserviceService) { }

  ngOnInit() {
    this.refreshHomePagePost();
  }

  ngOnChanges(){
    if(this.addNewPostRecord>0){
      this.refreshHomePagePost();
    }
  }

  refreshHomePagePost()
  {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userService.getAllPostsByPID(personID).subscribe(response =>{
      if(response.json())
      {
        this.posts = Array.of(JSON.parse(response.text()));
        this.posts = this.posts[0];
      }
    });
  }

}
