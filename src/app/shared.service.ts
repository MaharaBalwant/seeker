import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SharedService {

  private observableService = new BehaviorSubject<any>(false);
  searchAllList = this.observableService.asObservable();
  
  /*setsearchAllList(data: any) {
    this.observableService.next(data);
  };*/

  public searchListService = new BehaviorSubject<any>(false);
  setWorkerInfo(data: any) {
    this.searchListService.next(data);
  };
  
}
