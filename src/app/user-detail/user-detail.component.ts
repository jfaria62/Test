import { Component, OnInit } from '@angular/core';
import {random} from 'lodash';

//declare var _: any;

@Component({
  selector: 'app-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }
  number = 0;

  onIncrease() {
    this.number = random(1, 10);
  }
  ngOnInit() {
  }

}
