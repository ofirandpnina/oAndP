import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../class/users';
import { JsonServiceService } from '../services/json-service.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  user: users;

  lessons: any[];
  current_lessons: any[] = [];
  constructor(private json: JsonServiceService, private router: Router) {

    json.getLessonss().subscribe(data => {
      this.lessons = data;
      console.log(this.lessons);
      const stringUser = localStorage.getItem('user');
      this.user = JSON.parse(stringUser);
      for (let index = 0; index < this.user.level; index++) {
        this.current_lessons.push(this.lessons[index]);

      }
    });

  }


  toLearn(url) {
    this.router.navigate(["learning"], { state: { lessonUrl: url } });
  }
  ngOnInit(): void {
  }

}
