import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// counterCount= 0;
constructor(private counterService: CounterService){}
// ngOnInIt(){
//   this.counterService.counterCount$.subscribe(count =>{
//     this.counterCount = count;
//   });
// }
get counterCount() {
  return this.counterService.counterCount$;
}
}
