import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendord-diagram',
  templateUrl: './vendord-diagram.component.html',
  styleUrls: ['./vendord-diagram.component.css']
})
export class VendordDiagramComponent implements OnInit {

  data: any;

  constructor() {

//לשלוף את הלבל מהלוכל סטורג'



    this.data = {
      labels: ['Finished','In process','You Have to learn'],
      datasets: [
          {
              data: [4, 1, 25],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };

   }

  ngOnInit() {
  }

}
