import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { User, Login } from './user.module';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Request, RequestMethod, Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {SearchModal} from './modals/searchModal';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserserviceService {

  private loginUri = "http://localhost/seekerwebservices/profile.php";
  private profileUrl = "http://localhost/seekerwebservices/profile.php";
  searchModal:SearchModal;
  
  constructor( private http: Http,
  private sharedService:SharedService) { }

  /*UserProfileComponent Page Worker Detail profile page*/
  fetchPersonByID(personID:number) 
  {
      var jsonData = "personID="+personID+"&function=getProfileBytokenId";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*Register funtion*/
  registerUser(user : User)
  {
    console.log(user);
    const body: User =
    {
      userName : user.userName,
      userEmail : user.userEmail,
      password : user.password,
      repassword : user.repassword
    }

    var jsonData = "regArr="+JSON.stringify(user)+"&function=newRegistrationRec";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.profileUrl,jsonData,options);
  }

  /*Login funtion*/
  loginProfile(username: string, password: string)
  {
    var jsonData = "email="+username+"&password="+password+"&function=checkLoginCredential";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUri,jsonData,options);
  }

  /* New Searach Insert Function*/
  addNewSearch(location:string, timefrom:string, timeto:string, datee:string){
    /*this.searchModal.dateTest='';
    this.searchModal.location=location;
    this.searchModal.timeFrom=timefrom;
    this.searchModal.timeTo=timeto;
    this.sharedService.setWorkerInfo(this.searchModal);*/
    
    var jsonData = "tokenID="+JSON.parse(localStorage.getItem('tokkerID_Seeker'))+"&location="+location+"&timefrom="+timefrom+"&timeto="+timeto+"&date="+datee+"&function=insertNewRecord";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUri,jsonData,options);
  }

  /* Add/Send new Message Start */
  addMessages(senderID:number, receiverID:any, newMessageText:string){
    var jsonData = "senderID="+senderID+"&receiverID="+receiverID+"&newMessageText="+newMessageText+"&function=addMessages";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUri,jsonData,options);
  }
  /* Add/Send new Message Ends */

  /* Get all Message By Selected Persons Start */
  getMessagesSelectedPerson(senderID:number, receiverID:any){
    var jsonData = "senderID="+senderID+"&receiverID="+receiverID+"&function=getMessagesSelectedPerson";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUri,jsonData,options);
  }
  /* Get all Message By Selected Persons Ends */

  /** Delete by matchKey in addinSearch Component**/
  deleteRecordPersonAddinSearchByPID(personID:number,matchKeyID:number) 
  {
    var jsonData = "personID="+personID+"&matchKEY="+matchKeyID+"&function=deleteRecordPersonAddinSearchByPID";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.profileUrl,jsonData,options);
  }

  /* Matching algorithm based on location, date, status for person */
  getMatchingRecords(personID:number,matchKeyID:number,location:any,date:any)
  {
    var jsonData = "personID="+personID+"&matchKEY="+matchKeyID+"&location="+location+"&date="+date+"&function=getMatchingRecords";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.profileUrl,jsonData,options);
  }

  /* Add Follower in your list from click on follow button */
  addFollowerInList(personID:number,followID:number)
  {
    var jsonData = "personID="+personID+"&followID="+followID+"&function=addFollowerInList";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  getExistinglatest3SearchByPID(personID:number) 
  {
      var jsonData = "personID="+personID+"&function=getExistinglatest3SearchByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  getAllExistingSearchByPID(personID:number) 
  {
      var jsonData = "personID="+personID+"&function=getAllExistingSearchByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  getRecordSearchByEdit(personID:number, matchKey:number) 
  {
      var jsonData = "personID="+personID+"&matchKEY="+matchKey+"&function=getSelectedUpdateRecord";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  addNewPost(personID:number, postext:string) 
  {
    var jsonData = "personID="+personID+"&post="+postext+"&function=addNewPost";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Worker Detail profile page*/
  getAllPostsByPID(personID:number) 
  {
    var jsonData = "personID="+personID+"&function=getAllPostsByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }

  /*UserProfileComponent Page Followers list in popup window */
  getAllFollowersByPID(personID:number) 
  {
    var jsonData = "personID="+personID+"&function=getAllFollowersByPID";
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.profileUrl,jsonData,options);
  }
}
