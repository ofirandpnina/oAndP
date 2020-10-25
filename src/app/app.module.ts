import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ClassesVariablesComponent } from './classes-variables/classes-variables.component';
import { UserClassesVariablasComponent } from './user-classes-variablas/user-classes-variablas.component';
import { UserClasssComponent } from './user-classs/user-classs.component';
import { UserObjectComponent } from './user-object/user-object.component';
import { UsersComponent } from './users/users.component';
import { ValuesShapeComponent } from './values-shape/values-shape.component';
import { VariablesComponent } from './variables/variables.component';
import { AllclassComponent } from './allclass/allclass.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from 'src/path';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordListComponent } from './word-list/word-list.component';
import { HomePageComponent } from './home-page/home-page.component';
//import { VendordDiagramComponent } from './vendord-diagram/vendord-diagram.component';
import { ComparisonDiagramComponent } from './comparison-diagram/comparison-diagram.component';
import { SighnInComponent } from './sighn-in/sighn-in.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  //איזה קומפוננטות אני משתמשת
  declarations: [
    AppComponent,
    //MatAutocompleteModule,
    //BrowserAnimationsModule,
    ClassesVariablesComponent,
    UserClassesVariablasComponent,
    UserClasssComponent,
    UserObjectComponent,
    UsersComponent,
    ValuesShapeComponent,
    VariablesComponent,
    AllclassComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    WordListComponent,
    HomePageComponent,
    //VendordDiagramComponent,
    ComparisonDiagramComponent,
    SighnInComponent,
        // BrowserAnimationsModule
  ],



  //איזה ספריות אשתמש
  imports: [
    AppRoutingModule,BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(ROUTES)
  ],
//מאיזה קומפוננטה להריץ
  bootstrap: [AppComponent]
})
export class AppModule { }
