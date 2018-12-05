import { SearchModal } from './../modals/searchModal';
import { Component, OnInit, Output, Input, EventEmitter, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { UserserviceService } from './../userservice.service';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-newsearchform',
  templateUrl: './newsearchform.component.html',
  styleUrls: ['./newsearchform.component.css']
})
export class NewsearchformComponent implements OnInit {
  
  @Output() myEvent = new EventEmitter<any>();
  @Input('matchKey') matchKey1: number;
  loading = false;
  dataObj: any = {};
  public recordsAll:any;
  public records:any;

  constructor(private userServices: UserserviceService, private sharedData: SharedService) { }

  ngOnInit() { 

   }

   ngOnChanges(){
    if(this.matchKey1 > 0){
      var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));
      this.userServices.getRecordSearchByEdit(personID,this.matchKey1).subscribe(response =>{ 
        if(response.json())
        {
          this.records = Array.of(JSON.parse(response.text()));
          this.records = this.records[0][0];
          
          this.dataObj.location = this.records.location
          this.dataObj.timefrom = this.records.time_to;
          this.dataObj.timeto = this.records.time_to;
          this.dataObj.date = this.records.date;
        }
      });
    }
  }

  newsearch():void {
    this.userServices.addNewSearch(this.dataObj.location, this.dataObj.timefrom, this.dataObj.timeto, this.dataObj.date).subscribe(response =>{
      if(response.json())
      {
        //this.sharedData.setWorkerInfo(response.text());
        this.sharedData.searchAllList = response.json();
        var res = JSON.parse(response.text());
        this.myEvent.emit(true);
      }

    });
  }

  

}
