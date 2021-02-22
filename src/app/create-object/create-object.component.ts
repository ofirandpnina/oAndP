import { NULL_EXPR, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { classes } from '../class/classes';
import { userClassImp } from '../class/userClassImp';
import { userClasss } from '../class/userClasss';
import { valuesShape } from '../class/valuesShape';
import { variables } from '../class/variables';
import { DbService } from '../db.service';

@Component({
  selector: 'app-create-object',
  templateUrl: './create-object.component.html',
  styleUrls: ['./create-object.component.scss']
})
export class CreateObjectComponent implements OnInit {
  arrClass: userClasss[] = [];


  //1 - בחירת מחלקה
  //2 - בחירת תכונות למחלקה
  //3 - יצירת מימוש למחלקה
  level: number = 1;

  selectedClass: userClasss = {
    id_create_class: 0,
    id_user: 0,
    classes: {
      id_class: 0,
      class_name: "",
      image: "",
      description: "",
      variable: []
    },
    name_user_class: "",
    variable: []

  };
  selectedVariable: variables = {
    variable_id: 0,
    name_v: "",
    default_shape: "",
    valuesShape: []

  }
  selectedValueShape: valuesShape = {
    value_id: 0,
    class_id: 0,
    variable_name: "",
    value_name: "",
    value_image: ""

  }



  implement: userClassImp = {
    id_create_value: 0,
    userClasses: null,
    name_object: "",
    valuesShape: []

  }
  imp_name: string = "";
  constructor(private db: DbService) {

    this.db.GetUserClassByUserId(1).subscribe(x => {
      this.arrClass = <userClasss[]>x;
    })
  }

  ngOnInit(): void {
  }

  chooseClass(selectedClass: userClasss) {
    this.selectedClass = selectedClass;
    this.implement.userClasses = selectedClass;
    this.level++;//מעבר לשלב השני
  }

  chooseVariable( selectedVariable: variables) {

    //לבדוק האם התכונה נמצאת כבר במערך ואם כן אז להוריד אותהץ
    //אם לא להוסיף אותה
    this.selectedVariable = selectedVariable;

  }

  chooseValueShape(selectedValueShape: valuesShape) {
    console.log("-------searching");

    console.log(this.implement.valuesShape);

    const index = this.implement.valuesShape.findIndex(vs => vs.variable_name == selectedValueShape.variable_name);
    console.log(index);

    if (index == -1)
      this.implement.valuesShape.push(selectedValueShape);
    else
      this.implement.valuesShape[index] = selectedValueShape;

  }

  returnToClass() {
    this.implement = {
      id_create_value: 0,
      userClasses: null,
      name_object: "",
      valuesShape: []
    }
    this.level = 1;
  }
  returnToVariables() {
    this.selectedVariable = {
      variable_id: 0,
      name_v: "",
      default_shape: "",
      valuesShape: []

    }
    this.level = 2;
  }

  goToImp(){
    this.level=3;
  }

  saveImpName() {
    this.implement.name_object = this.imp_name;
  }

  saveImp() {
    this.db.addImp(this.implement).subscribe(result => {
      console.log("successssssssssssssssssss");

    });
  }
}





//להציג כפתורים של תכונות שברגע שלוחצים על כפתור של תוכנה :
//התכונה תתווסף למערך תכונות  
