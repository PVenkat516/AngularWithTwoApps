import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterCount = 0;
  constructor() { }
  private counterCountSubject = new BehaviorSubject<number>(0);
  counterCount$ = this.counterCountSubject.asObservable();

  getCounterCount(): number {
    return this.counterCountSubject.value;
  }

  incrementCounterCount() {
    this.counterCountSubject.next(this.counterCountSubject.value + 1);
  //  this.counterCountSubject.next(currentCount + 1);
  }

  decrementCounterCount() {
    const currentCount = this.counterCountSubject.value;
    if (currentCount > 0) {
      this.counterCountSubject.next(currentCount - 1);
    }
  }

  resetCounterCount() {
    this.counterCountSubject.next(0);
  }

}
