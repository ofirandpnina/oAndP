import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MaterialModule } from './material/material.module';
//import { Component } from "@angular/core";
import { MyProfileComponent } from "./my-profile/my-profile.component";
//import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
// import { UserClasssComponent } from "./user-classs/user-classs.component";
import { WordListComponent } from "./word-list/word-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { VendordDiagramComponent } from "./vendord-diagram/vendord-diagram.component";
import { ComparisonDiagramComponent } from "./comparison-diagram/comparison-diagram.component";

import { LessonsComponent } from './lessons/lessons.component';
import { AllclassComponent } from './allclass/allclass.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyObjectComponent } from './my-object/my-object.component';
import { LearningComponent } from './learning/learning.component'
import { CreateObjectComponent } from './create-object/create-object.component';
import { SignComponent } from './sign/sign.component';
import { SighnupComponent } from './sign/sighnup/sighnup.component';
import { SighnInComponent } from './sign/sighn-in/sighn-in.component';
import { MenegementComponent } from './menegement/menegement.component';
import { AddobjectComponent } from './menegement/addobject/addobject.component';
import { AdlessonComponent } from './menegement/adlesson/adlesson.component';
import { ImpDetailsComponent } from './imp-details/imp-details.component';

const routes: Routes = [
  {
    path: "",
    component: SignComponent,
    children: [
      {path:"" , component:SighnInComponent},
      {path:"sign-up" , component:SighnupComponent}

    ]
  },
  {
    path: "my-profile",
    component: MyProfileComponent,
    children: [
      { path: "", component: ComparisonDiagramComponent },
      // { path: "my-classes", component: UserClasssComponent },
      
      { path: "vendor-diagram", component: VendordDiagramComponent },
      { path: "comparison-diagram", component: ComparisonDiagramComponent },
      { path: "my-classes", component: MyClassesComponent },
      
    ]
  },
  {path:"menegment",component:MenegementComponent,
      children:[

        {path:"addobject",component:AddobjectComponent},
        {path:"addlson",component:AdlessonComponent},
      ]

  },
  { path: "my-object", component: MyObjectComponent },
  { path: "imp-details", component: ImpDetailsComponent },
  { path: "create-object", component: CreateObjectComponent },
  { path: "word-list", component: WordListComponent },
  { path: "lessons", component: LessonsComponent },
  { path: "learning", component: LearningComponent },
  
  { path: "**", component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
