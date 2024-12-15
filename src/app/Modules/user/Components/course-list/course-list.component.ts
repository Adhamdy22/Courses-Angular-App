
import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../../Shared/Interfaces/Courses';
import { CoursesService } from '../../../../Shared/services/courses.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  CoursesList: ICourse[] = [];   // Full list of courses
  coursesPerPage: ICourse[] = []; // Courses for the current page
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (courses) => {
        this.CoursesList = courses;
        this.totalPages = Math.ceil(this.CoursesList.length / this.itemsPerPage);
        this.updatePaginatedCourses();
      },
      (error) => console.error('Error fetching courses:', error)
    );
  }

  updatePaginatedCourses(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.coursesPerPage = this.CoursesList.slice(startIndex, endIndex);
    console.log('Courses to display on this page:', this.coursesPerPage);
    console.log('CoursesList:', this.CoursesList);
console.log('coursesPerPage:', this.coursesPerPage);

  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedCourses();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedCourses();
    }
  }
}
