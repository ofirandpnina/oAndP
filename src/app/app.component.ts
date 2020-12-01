import { Component } from '@angular/core';
import { DbService } from './db.service';


@Component({
  //שם התגית
  selector: 'app-root',
  //תבנית -html
  templateUrl: './app.component.html',
  //עיצוב-style
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private dbService: DbService) {

  }

  tryPost() {
    // this.dbService.login("sdjkal@dasa","123456").subscribe(x=>console.log(x));
  }
}

