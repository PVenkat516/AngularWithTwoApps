import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counters: { count: number }[] = [];
  constructor(private counterService : CounterService){}
 
  ngOnInIt(){
    this.counterService.counterCount$.subscribe(count => {
      this.counters = Array.from({ length: count }, () => ({ count: 0 }));
    });
  }
    addCounter() {
      this.counters.push({ count: 0 });
      this.counterService.incrementCounterCount()
    }
  
    resetCounters() {
      this.counters = [];
      this.counterService.resetCounterCount();
    }
  
    incrementCounter(index: number) {
      if (index >= 0 && index < this.counters.length) {
        this.counters[index].count++;
      }
    }
  
    decrementCounter(index: number) {
      if (index >= 0 && index < this.counters.length) {
        if (this.counters[index].count > 0) {
          this.counters[index].count--;
        }
      }
    }
  
    deleteCounter(index: number) {
      if (index >= 0 && index < this.counters.length) {
        this.counters.splice(index, 1);
        this.counterService.decrementCounterCount();
      }
    }
  }

