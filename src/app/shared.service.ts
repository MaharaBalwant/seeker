import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SharedService {

  private observableService = new BehaviorSubject<boolean>(false);
  searchAllList = this.observableService.asObservable();

  matchPopupFlag = this.observableService.asObservable();

  public searchListService = new BehaviorSubject<boolean>(false);
  setWorkerInfo(data: any) {
    this.searchListService.next(data);
  };

  public matchList = new BehaviorSubject<any>(false);
  setMatchList(data: any) {
    this.matchList.next(data);
  };

  public followerList = new BehaviorSubject<any>(false);
  setFollowersList(data: any) {
    this.followerList.next(data);
  };

  public messageClickId = new BehaviorSubject(0);
  setMessageClickId(data: any) {
    this.messageClickId.next(data);
  };
  
}
