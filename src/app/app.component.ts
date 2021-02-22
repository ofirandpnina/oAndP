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
  ngOnDestroy() {
    this.saveUserDate();
    this.saveLevel();
  }

  saveUserDate() {
    // קוד משתמש ושלב
    const stringUser = localStorage.getItem("user");
    const user = JSON.parse(stringUser);
    const id = user.id;
    const level = user.level;
    //זמן התחלה
    //  const startTime = new Date();
    //  console.log("startTime is: " + startTime);
    //  const stringStartTime = JSON.stringify(startTime);
    //  localStorage.setItem("startTime", stringStartTime);
    const stringStartTime = localStorage.getItem("startTime");
    const startTime = JSON.parse(stringStartTime);
    //זמן סיום
    const endTime = new Date();
    //שמירת הנתונים
    //שליחת הנתונים לשרת
    console.log("----------sendung userDate" ,id,level,startTime,endTime);


    
  }
  saveLevel(){
    const stringUser = localStorage.getItem("user");
    const user = JSON.parse(stringUser);
    this.dbService.updateLevel(user);
  }
}

