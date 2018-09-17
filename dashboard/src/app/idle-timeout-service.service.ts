import { Injectable } from '@angular/core';
import { Subscription, Observable, Subject , timer } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class IdleTimeoutServiceService {
 
  timeoutMiliSecond : number;

  private sessionAliveTime : number;

  timeOutSubject : Subject<boolean> = new Subject<boolean>();

  constructor() {


  }


  setSessionAliveTime(time : number){
    this.timeoutMiliSecond = time; //converts millisecond to seconds

    console.log('timeout at : ' + new Date(time));
    this.startTimer();
  }

  startTimer() {
    const timeObservable = timer(new Date(this.timeoutMiliSecond));

    timeObservable.subscribe( () =>{
      this.timeOutSubject.next(true);
    });
  }

}
