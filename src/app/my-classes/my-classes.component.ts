import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss']
})
export class MyClassesComponent implements OnInit {

  classes: any[
    
  ];

  constructor() {



  }


  getUserClasses() {
    //מביאה מהשרת את המחלקות

  }
  ngOnInit(): void {
  }

}
