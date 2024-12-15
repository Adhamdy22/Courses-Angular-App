
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICourse } from '../../../../Shared/Interfaces/Courses';
import { CoursesService } from '../../../../Shared/services/courses.service';




@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css'
})
export class CoursedetailsComponent {
  course: ICourse|undefined;
  courseid:string=''
  @Input() id:String = '';
  currentIndex: number = 0; // Current index of the course
  courses: ICourse[] = []; // Array of all courses
  // we use withComponentInputBinding if the app is standalone
  //  we use bindToComponentInputs if the app is not standalone

  // ?id= query parameter
  constructor(private route: ActivatedRoute, private courseService: CoursesService,private router:Router) { }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.courseid = params.get('id')!;
  //     this.getCourseDetails(this.courseid);
  //   });
  // }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.route.paramMap.subscribe(params => {
        const courseId = +params.get('id')!; // Get the course ID from the route
        this.currentIndex = this.courses.findIndex(course => course.id === courseId);
        this.course = this.courses[this.currentIndex];
      });
    });
  }


  courseData: any;

  // getCourse(): void {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   if (idParam !== null) {
  //     const id = +idParam;
  //     this.courseService.getCourse(id)
  //       .subscribe(course => this.course = course);
  //     console.log("params",id)
  //   } else {
  //     console.error('No course ID provided in the route.');
  //     // Handle the case where there is no ID provided in the route
  //   }
  //   // console.log("id",this.id)
  // }

  // getCourseDetails(id: string) {
  //   this.httpclient.get(`https://api.sampleapis.com/codingresources/codingResources/${id}`).subscribe(data => {
  //     this.courseData = data;
  //   });
  // }
  getCourseDetails(id: string): void {
    this.courseService.getCourseDetails(id).subscribe(data => {
      this.course = data;
    }, error => {
      console.error('Error fetching course details', error);
    });
  }




  // getnext():void{
  //    //this.router.navigate([`/courses/${5}`])
  //    if (this.course && this.course.id !== undefined) {
  //     this.router.navigate(['/courses/:id'], { queryParams: { id: this.course.id + 1, name: 'Testing' },queryParamsHandling:'merge'});
  //   } else {
  //     console.error('Course is undefined or has no ID');
  //   }
  // }

  getNext(): void {
    if (this.currentIndex < this.courses.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/courses', this.courses[this.currentIndex].id]);
    }
  }

  getPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/courses', this.courses[this.currentIndex].id]);
    }
  }

}
