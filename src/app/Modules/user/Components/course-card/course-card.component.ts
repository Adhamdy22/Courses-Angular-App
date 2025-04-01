import { Component, input} from '@angular/core';


import { ICourse } from '../../../../Shared/Interfaces/Courses';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  // @Input({required:true,alias:'CourseObject'}) course!: ICourse;
  course = input.required<ICourse>({ alias: 'CourseObject' });



  // viewCourse(courseId: number): void {
  //   this.router.navigate([`courses/${courseId}`]);
  //   //this.router.navigate(['courses'],{queryParams:{id:courseId,name:'Testing Query Param'}})
  // }
}
