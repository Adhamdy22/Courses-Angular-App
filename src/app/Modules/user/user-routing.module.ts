import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { CourseListComponent } from "./Components/course-list/course-list.component";
import { CoursedetailsComponent } from "./Components/coursedetails/coursedetails.component";
import { LoginComponent } from "../../Shared/components/login/login.component";
import { RegisterComponent } from "../../Shared/components/register/register.component";
import { PageNotFoundComponent } from "../../Shared/components/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  //{ path: 'course', component: CoursedetailsComponent },
  { path: 'courses/:id', component: CoursedetailsComponent },
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent}  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
