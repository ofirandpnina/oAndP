import { Component, OnInit } from '@angular/core';
import { users } from '../class/users';
import { JsonServiceService } from '../services/json-service.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  user: users;

  lessons: any[];
  current_lessons: any[]=[];
  constructor(private json: JsonServiceService) {
    json.getLessonss().subscribe(data => {
      this.lessons = data;
      console.log(this.lessons);
      const stringUser = localStorage.getItem('user');
      this.user = JSON.parse(stringUser);
      for (let index = 0; index < this.user.level; index++) {
        this.current_lessons.push( this.lessons[index]);
  
      }
    });
 
  }

  ngOnInit() {
  }

}
