import { SharedService } from './../shared.service';
import { Component, OnInit, Input, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UserserviceService } from './../userservice.service';
import { RenderpopupComponent } from './../common/renderpopup/renderpopup.component';
//import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addinsearch',
  templateUrl: './addinsearch.component.html',
  styleUrls: ['./addinsearch.component.css'],
  providers:[RenderpopupComponent ]
})
export class AddinsearchComponent implements OnInit {
  public records:any;
  public recordsAll:any;
  public matchPopup:any = false;
  public displayedColumns: string[];
  public dataSource:any;
  //@Input() myEvent:any;
  agreed = false;
  master = 0;
  matchKey = 0; 
  matchDelKey:number = 0;
  display:string;
  displayMatchModel:string = 'none';
  //@ViewChild('container', { read: ViewContainerRef }) 
  //public container: ViewContainerRef;

  constructor(
              private userServices:UserserviceService, 
              private SharedService: SharedService,
              private popupcomp: RenderpopupComponent
              //public bsModalService: BsModalService
  ) { }

  ngOnInit() 
  {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.customPageLoad(personID);
  }

  customPageLoad(personID) {
    //console.log("shared service data check--",this.SharedService.searchAllList); //shared services test demo
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
    this.displayMatchModel = 'none';
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

  getMatchingRecords(matchKey:number,location:string,date:any){
    //console.log(matchKey,' ',location,' ',date);
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userServices.getMatchingRecords(personID,matchKey,location,date).subscribe(response =>{
      if(response.json()!='')
      {
        this.recordsAll = Array.of(JSON.parse(response.text()));
        this.recordsAll = this.recordsAll[0];
        if(this.recordsAll){
          this.matchPopup = true;
          this.SharedService.setMatchList(this.recordsAll);
          this.recordsAll = this.compareArray(this.SharedService.followerList.value,this.recordsAll);
          console.log("return data",this.recordsAll);
          this.SharedService.matchPopupFlag = this.matchPopup;
          this.popupcomp.openPopupRender();     //Calling render component html
          this.displayMatchModel = 'block';
        }else{
          var matchPopup = false;
          this.recordsAll = [];
          this.SharedService.setMatchList(this.recordsAll);
          this.SharedService.matchPopupFlag = this.matchPopup;
        }
      }
    });
  }

  /* compareArray(arr1,arr2){
    const finalarray:any = [];
    let i:number = 0;
    arr1.forEach((e1)=>arr2.forEach((e2) => 
    {
      if(e1.f_id === e2.f_id)
      {
        e2.fBtn = 0;
        finalarray.push(e2);
      }else{
        finalarray.push(e2);
      }
      
    })
    );
    return finalarray;
  } */

  compareArray(arr1,arr2)
  {
    //const finalarray:any = [];
    let i:number = 0;
    for(let e1 in arr1){
      for(let k in arr2){
        if(k['f_id'] === e1['f_id']){
          //console.log("value k",k);
          arr2[i]['fBtn'] = "0";
        }
      }
	    i++;
    };
    return arr2;
  }

  addFollowerList(fID){
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.userServices.addFollowerInList(personID,fID).subscribe(response =>{
      if(response.json()==1)
      {
        console.log("added In database",fID);
      }
    });
  }

  messageFollower(fID){
	this.router.navigate(['/messages/'fID]);
  }

}
