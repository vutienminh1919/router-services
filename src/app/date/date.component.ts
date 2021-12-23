import { Component, OnInit } from '@angular/core';
import {MyserviceService} from "../myservice.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
newComponent = "new Component";
todayDate?: Date;
  constructor(private  myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todayDate = this.myservice.showTodayDate();

  }

}
