import { Component, OnInit } from '@angular/core';
import { classes } from '../class/classes';
import { DbService } from '../db.service';

@Component({
  selector: 'app-create-object',
  templateUrl: './create-object.component.html',
  styleUrls: ['./create-object.component.scss']
})
export class CreateObjectComponent implements OnInit {
  arrClass: classes[] = [
    {
      id_class: 1,
      class_name: "dog",
      image: "כלב-צורה-דיפולטיבית.gif",
      description: "כלב",
    },
    {
      id_class: 2,
      class_name: "smile",
      image: "כלב-דלמתי-גוף.gif",
      description: "סמיילי",
    },
    {
      id_class: 3,
      class_name: "car",
      image: "גןף-של-כלב-בצבע-חום.gif",
      description: "מכונננננננננית",
    }
  ];
  selectedClass: classes={
    id_class: 0,
    class_name: "demo-class",
    image: "",
    description: "",
  };


  properties: any[] = [
    {
      property: "ears",
      value: "אוזניים-ארוכות-שחורות",
      img: "אוזניים-ארוכות-שחורות"
    }
  ];
  constructor(private db: DbService) {

    // this.db.getAllClassess().subscribe(x => {
    //   console.log("data from server: ", x);

    //   this.arrClass = <classes[]>x;
    // })
  }

  chooseClass(selectedClass: classes) {
    console.log(selectedClass);
    
    this.selectedClass = selectedClass;
  }
  ngOnInit(): void {
  }

}
