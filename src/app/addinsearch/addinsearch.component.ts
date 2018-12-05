import { SharedService } from './../shared.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from './../userservice.service';

@Component({
  selector: 'app-addinsearch',
  templateUrl: './addinsearch.component.html',
  styleUrls: ['./addinsearch.component.css']
})
export class AddinsearchComponent implements OnInit {
  public records:any;
  public recordsAll:any;
  public displayedColumns: string[];
  public dataSource:any;
  //@Input() myEvent:any;
  agreed = false;
  master = 0;
  matchKey = 0; 
  matchDelKey:number = 0;
  display:string;

  constructor(private userServices:UserserviceService, private SharedService: SharedService) {
    
   }

  ngOnInit() 
  {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.customPageLoad(personID);
  }

  customPageLoad(personID) {
    console.log("shared service data check--",this.SharedService.searchAllList); //shared services test demo
    this.userServices.getExistinglatest3SearchByPID(personID).subscribe(response =>{ 
      if(response.json())
      {
        this.records = Array.of(JSON.parse(response.text()));
        this.records = this.records[0];
      }else{
        this.records = [];
      }
    });
  };

  onClickEditSearch(matchKey:number) {
    this.matchKey = matchKey;
  }

  onNewValSubmit(agreed: boolean) {
    if(agreed == true){
      var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
      this.customPageLoad(personID);
      this.master++;
    }
  }

  onClickDeleteBtn(matchDelKey:number) {
    this.matchDelKey = matchDelKey;
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

  onDeleteCurrentSearch(matchKeyID) {
    var matchKeyID = matchKeyID;
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userServices.deleteRecordPersonAddinSearchByPID(personID,matchKeyID).subscribe(response =>{
      if(response.json()=="1")
      {
        this.ngOnInit();        //Refresh component again
        this.onCloseHandled();
        this.master++;
      }
    });
  }

  clickMessage(event){
    console.log("event",event);
  }


}
