import { Routes } from "@angular/router";
import { Component } from "@angular/core";
import { MyProfileComponent } from "./app/my-profile/my-profile.component";
import { AppComponent } from "./app/app.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { UserClasssComponent } from "./app/user-classs/user-classs.component";
import { WordListComponent } from "./app/word-list/word-list.component";
import { HomePageComponent } from "./app/home-page/home-page.component";
import { VendordDiagramComponent } from "./app/vendord-diagram/vendord-diagram.component";
import { ComparisonDiagramComponent } from "./app/comparison-diagram/comparison-diagram.component";
import { SighnInComponent } from "./app/sighn-in/sighn-in.component";

export const ROUTES: Routes = [
    {
        path: "my-profile",
        component: MyProfileComponent,
        children: [
            { path: "my-classes", component: UserClasssComponent },
            { path: "word-list", component:WordListComponent},
            {path:"vendor-diagram", component:VendordDiagramComponent},
            {path:"comparison-diagram",component:ComparisonDiagramComponent}
        ]
    },
    {path:"sighn-in", component: SighnInComponent},
    { path: "", component: HomePageComponent },
    { path: "**", component: PageNotFoundComponent }


]