import { Component, OnInit } from '@angular/core';
import { users } from '../class/users';
import {Tile} from '../Tile';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: users;
  
  constructor() {
    //כשרוצים לשלוף מהלוקל סטורג'
    const stringUser = localStorage.getItem('user');
    this.user = JSON.parse(stringUser);
    console.log(this.user);

  }

  ngOnInit() {
  }

}
