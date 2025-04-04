import { booleanAttribute, Component, input, Input, numberAttribute, output} from '@angular/core';


import { ICourse } from '../../../../Shared/Interfaces/Courses';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  // @Input({required:true,alias:'CourseObject'}) course!: ICourse;

  course = input.required<ICourse>({ alias: 'CourseObject' });

  // output signal
  confirm = output<void>({ alias: 'Confirm' });


  @Input({required:true,transform:booleanAttribute}) disabled=false;

  @Input({required:true,transform:(value:unknown) => numberAttribute(value,1)}) count=0;





  // viewCourse(courseId: number): void {
  //   this.router.navigate([`courses/${courseId}`]);
  //   //this.router.navigate(['courses'],{queryParams:{id:courseId,name:'Testing Query Param'}})
  // }
}
