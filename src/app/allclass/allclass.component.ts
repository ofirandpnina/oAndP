import { Component, OnInit } from '@angular/core';
import { classes } from '../class/classes';
import { DbService } from '../db.service';

@Component({
  selector: 'app-allclass',
  templateUrl: './allclass.component.html',
  styleUrls: ['./allclass.component.css']
})
export class AllclassComponent implements OnInit {

  arrClass:classes[];
  constructor(private db:DbService) {

this.db.getAllClassess().subscribe(x=>{
  this.arrClass=<classes[]>x;
})
   }

  ngOnInit() {
  }

}
