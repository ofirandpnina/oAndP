import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { classes_variables } from '../class/classes_variables';
@Component({
  selector: 'app-classes-variables',
  templateUrl: './classes-variables.component.html',
  styleUrls: ['./classes-variables.component.css']
})
export class ClassesVariablesComponent implements OnInit {
  arrcv: classes_variables[];

  constructor(private db: DbService) {

    this.db.getAllClasses_variables().subscribe(x => {
      this.arrcv = <classes_variables[]>x
    })
  }

  ngOnInit() {
  }

}
