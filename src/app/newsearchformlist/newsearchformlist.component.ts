import { SharedService } from './../shared.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from './../userservice.service';

@Component({
  selector: 'app-newsearchformlist',
  templateUrl: './newsearchformlist.component.html',
  styleUrls: ['./newsearchformlist.component.css']
})
export class NewsearchformlistComponent implements OnInit {

  @Input('master') masterName: number;
  public recordsAll:any;
  public displayedColumns: string[];
  public dataSource:any;
  agreedlist = false;
  
  constructor(private userServices:UserserviceService, private sharedData:SharedService) { }

  ngOnInit() {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
    this.listAllSearchs(personID);
  }

  ngOnChanges(){
    
    if(this.masterName >= 1){
      var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
      this.listAllSearchs(personID);
    }
  }
  
  listAllSearchs(personID)
  {
    this.userServices.getAllExistingSearchByPID(personID).subscribe(response =>{
      if(response.json()!="null")
      {
        this.recordsAll = Array.of(JSON.parse(response.text()));
        this.recordsAll = this.recordsAll[0];
        if(this.recordsAll==undefined){
          this.displayedColumns = [];
          this.dataSource = [];
        }else{
          this.displayedColumns = ['position','location', 'time_to', 'time_from', 'date'];
          this.dataSource = this.recordsAll;
        }
      }else{
        this.displayedColumns = [];
        this.dataSource = [];
      }
    });
  }

  

}
