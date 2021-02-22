import { Component, OnInit } from '@angular/core';
import { userClassImp } from '../class/userClassImp';

@Component({
  selector: 'app-imp-details',
  templateUrl: './imp-details.component.html',
  styleUrls: ['./imp-details.component.scss']
})
export class ImpDetailsComponent implements OnInit {


  imp: userClassImp={
    id_create_value: 0,
    //   public Nullable<int> id_create_class { get; set; }
    userClasses:null,
    name_object:"",
    valuesShape: []
  };
  constructor() {
    const stringImp = localStorage.getItem("selectedImp");
    this.imp = JSON.parse(stringImp);
  }

  ngOnInit(): void {
  }

}
