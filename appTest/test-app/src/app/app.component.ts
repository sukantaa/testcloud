import { Component,OnInit } from '@angular/core';
import { TestService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    TestService
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private testService:TestService){

  }
  ngOnInit(){
    this.testService.test().subscribe(
      data=>{
        console.log('response',data);
      }
    )

  }
}
