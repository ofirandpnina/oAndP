import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { UserClassesVariablasComponent } from './user-classes-variablas/user-classes-variablas.component';
// import { UserClasssComponent } from './user-classs/user-classs.component';

// import { UsersComponent } from './users/users.component';
// import { ValuesShapeComponent } from './values-shape/values-shape.component';
// import { VariablesComponent } from './variables/variables.component';
import { AllclassComponent } from './allclass/allclass.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
//import { RouterModule } from '@angular/router';
//import { ROUTES } from 'src/path';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordListComponent } from './word-list/word-list.component';
import { HomePageComponent } from './home-page/home-page.component';
//import { VendordDiagramComponent } from './vendord-diagram/vendord-diagram.component';
import { ComparisonDiagramComponent } from './comparison-diagram/comparison-diagram.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MaterialModule } from './material/material.module';

import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import { VendordDiagramComponent } from './vendord-diagram/vendord-diagram.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyObjectComponent } from './my-object/my-object.component';
import { LearningComponent } from './learning/learning.component';
import { CreateObjectComponent } from './create-object/create-object.component';
import { SignComponent } from './sign/sign.component';
import { SighnInComponent } from './sign/sighn-in/sighn-in.component';
import { SighnupComponent } from './sign/sighnup/sighnup.component';
import { MenegementComponent } from './menegement/menegement.component';
import { AdlessonComponent } from './menegement/adlesson/adlesson.component';
import { AddobjectComponent } from './menegement/addobject/addobject.component';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
import{ToastModule}from 'primeng/toast';
import { ImpDetailsComponent } from './imp-details/imp-details.component';

@NgModule({
  //איזה קומפוננטות אני משתמשת
  declarations: [
    AppComponent,
    //MatAutocompleteModule,
    //BrowserAnimationsModule,
   
    // UserClassesVariablasComponent,
    // UserClasssComponent,
    
    // UsersComponent,
    // ValuesShapeComponent,
    // VariablesComponent,
    AllclassComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    WordListComponent,
    HomePageComponent,
    VendordDiagramComponent,
    ComparisonDiagramComponent,
    SighnInComponent,
    SighnupComponent,
    LessonsComponent,
    MyClassesComponent,
    MyObjectComponent,
    LearningComponent,
    CreateObjectComponent,
    SignComponent,
    MenegementComponent,
    AdlessonComponent,
    AddobjectComponent,
    ImpDetailsComponent,
  
        // BrowserAnimationsModule
  ],



  //איזה ספריות אשתמש
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    
    ReactiveFormsModule,BrowserModule,//RouterModule.forRoot(ROUTES)
    ButtonModule,
    ChartModule,
    FileUploadModule,CardModule,ToastModule,
    
  ],
//מאיזה קומפוננטה להריץ
  bootstrap: [AppComponent]
})
export class AppModule { }
