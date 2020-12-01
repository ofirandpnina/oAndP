import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MaterialModule } from './material/material.module';
//import { Component } from "@angular/core";
import { MyProfileComponent } from "./my-profile/my-profile.component";
//import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserClasssComponent } from "./user-classs/user-classs.component";
import { WordListComponent } from "./word-list/word-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { VendordDiagramComponent } from "./vendord-diagram/vendord-diagram.component";
import { ComparisonDiagramComponent } from "./comparison-diagram/comparison-diagram.component";
import { SighnInComponent } from "./sighn-in/sighn-in.component";
import { SighnupComponent } from './sighnup/sighnup.component';

const routes: Routes = [
 { path: "my-profile",
component: MyProfileComponent,
children: [
    { path: "my-classes", component: UserClasssComponent },
    { path: "word-list", component:WordListComponent},
    {path:"vendor-diagram", component:VendordDiagramComponent},
    {path:"comparison-diagram",component:ComparisonDiagramComponent}
]
},
{path:"sighnup", component: SighnupComponent},

{ path: "", component: SighnInComponent },
{ path: "**", component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
