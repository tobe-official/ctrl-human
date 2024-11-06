import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

export const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
];
