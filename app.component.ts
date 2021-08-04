import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter:number=0;
  reducer = ()=>{
    this.counter-=1;
  }
  increaser = ()=>{
    this.counter+=1;
  }
  reseter = ()=>{
    this.counter=0;
  }
}
