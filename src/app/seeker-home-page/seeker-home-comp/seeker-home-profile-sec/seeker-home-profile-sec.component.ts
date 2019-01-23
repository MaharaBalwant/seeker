import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { UserserviceService } from '../../.././userservice.service';

@Component({
  selector: 'app-seeker-home-profile-sec',
  templateUrl: './seeker-home-profile-sec.component.html'
})
export class SeekerHomeProfileSecComponent implements OnInit {
  public users:any = [];
  public profilename:string;
  public address1:string;
  public address2:string;
  public city:string;
  public state:string;
  public country:string;
  public zipcode:string;
  public phone:string;

  constructor(private http:Http, private userService: UserserviceService) { }

  ngOnInit() {
    var personID = JSON.parse(localStorage.getItem('tokkerID_Seeker'));

    this.userService.fetchPersonByID(personID).subscribe(response =>{
      if(response.json())
      {
        this.users = Array.of(JSON.parse(response.text()));
        this.profilename = this.users[0].first_name+' '+this.users[0].last_name;
        this.address1 = this.users[0].address1;
        this.address2 = this.users[0].address2;
        this.city = this.users[0].city;
        this.state = this.users[0].state;
        this.country = this.users[0].county;
        this.zipcode = this.users[0].pin_code;
        this.phone = '+'+91+'-'+this.users[0].phone;
      }
    });
  }

}