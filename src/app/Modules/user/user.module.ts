import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildViewComponent } from './Components/child-view/child-view.component';
import { CourseCardComponent } from './Components/course-card/course-card.component';
import { CourseListComponent } from './Components/course-list/course-list.component';
import { CoursedetailsComponent } from './Components/coursedetails/coursedetails.component';
import { UserRoutingModule } from './user-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './Components/home/home.component';



@NgModule({
  declarations: [
    ChildViewComponent,
    CourseCardComponent,
    CourseListComponent,
    CoursedetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    CarouselModule,
  ],



})
export class UserModule { }
