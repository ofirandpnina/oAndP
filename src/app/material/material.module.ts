import { NgModule } from '@angular/core';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule } from '@angular/material/input' ;

import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//import {FormControl} from '@angular/forms';
//import{Validators}from '@angular/forms/forms'
//const material=[MatFormFieldModule,MatInputModule,MatButtonModule];
const MaterialComponent=[

MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports:[MaterialComponent]    
  
})
export class MaterialModule { }
