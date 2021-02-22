import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../class/users';
import { JsonServiceService } from '../services/json-service.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  user: users;
  end: boolean = false;
  lessons: any[];
  current_lessons: any[] = [];
  url: string;
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
    this.url = this.router.getCurrentNavigation().extras.state.lessonUrl;
    console.log(this.url);

  }

  next() {
    const index = this.lessons.findIndex(l => l.url == this.url);
    if (index == this.lessons.length - 1)
      this.end = true;
    this.user.level = this.lessons[index].id;
    this.url = this.lessons[index + 1].url;
    alert("שיעור הבא");
    
  }
  returnToLessons() {
    const stringUser = JSON.stringify(this.user);
    localStorage.setItem('user', stringUser);

    this.router.navigate(["/lessons"]);
  }
  ngOnInit(): void {
  }
 

}
