import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-comparison-diagram',
  templateUrl: './comparison-diagram.component.html',
  styleUrls: ['./comparison-diagram.component.css']
})
export class ComparisonDiagramComponent implements OnInit {

  data: any;
  minutes: number[];
  labels: number[];


  constructor(private serv:DbService) {
    //לשלוף מהלוקל סטורג' את הקוד של המשתמש המחובר
    const id = 1;
    this.serv.getWeekStatistics(id).subscribe(res=>{
      console.log(res);
    });

    this.minutes = [65, 59, 80, 81, 56, 55];

    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: 'Minutes of learnings',
          data: this.minutes,
          fill: false,
          borderColor: '#4bc0c0'
        }
      ]
    }

  }

  ngOnInit() {
  }

}
