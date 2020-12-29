import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-diagram',
  templateUrl: './comparison-diagram.component.html',
  styleUrls: ['./comparison-diagram.component.css']
})
export class ComparisonDiagramComponent implements OnInit {

  data: any;
  minutes: number[];
  minutes_avg: number[];


  constructor() {
    // this.serv.getMinutes( result => this.minutes = result);
   
    this.minutes = [65, 59, 80, 81, 56, 55];

    this.data = {
      labels: ['sunday', 'monday', 'tuesday', 'wednsday', 'thursday', 'friday'],
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
