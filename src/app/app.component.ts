import { Component } from '@angular/core';
import {MyserviceService} from "./myservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Router-Services';
  todayDate?: Date;

  constructor(private myservice: MyserviceService) {
  }

  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();
  }
}
