
import { AfterViewInit, ChangeDetectionStrategy,  Component, computed, OnInit, QueryList, signal, ViewChildren} from '@angular/core';
import { ICourse } from '../../../../Shared/Interfaces/Courses';
import { CoursesService } from '../../../../Shared/services/courses.service';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit,AfterViewInit {
  CoursesList: ICourse[] = [];   // Full list of courses
  coursesPerPage: ICourse[] = []; // Courses for the current page
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  private coursessignal=signal<ICourse[]>([]);

  searchtext=signal<string>('')

  //computedcourses=computed(()=>this.coursessignal().map(c=>({...c,description:`${c.description}`})))

  filteredCourses = computed(() => {
    
    if(this.searchtext){
      const query = this.searchtext().trim().toLowerCase();
      return this.coursessignal().filter(course =>
        course.description.toLowerCase().includes(query)
      );
    }
    else{
      return this.coursessignal()
    }

  });

  //private changedetector = inject(ChangeDetectorRef)

  @ViewChildren(CourseCardComponent) coursechildren!: QueryList<CourseCardComponent>;

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  onclick(){

  }

  UpdateSearchText(Searchtext:string){
    this.searchtext.set(Searchtext)
  }
  updateSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchtext.set(target.value);
  }

  ngAfterViewInit(): void {
      this.coursechildren.changes.subscribe((res:QueryList<CourseCardComponent>)=>{
            res.forEach(course=>{
              console.log("Course",course)
            })
      });
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (courses) => {
        //this.CoursesList = courses;
        //this.changedetector.detectChanges();
        this.coursessignal.set(courses);
        // this.totalPages = Math.ceil(this.coursessignal().length / this.itemsPerPage);
        // this.updatePaginatedCourses();
      },
      (error) => console.error('Error fetching courses:', error)
    );
  }

  // updatePaginatedCourses(): void {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.coursesPerPage = this.coursessignal().slice(startIndex, endIndex);
  //   console.log('Courses to display on this page:', this.coursesPerPage);
  //   console.log('CoursesList:', this.coursessignal());
  //   console.log('coursesPerPage:', this.coursesPerPage);
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.updatePaginatedCourses();
  //   }
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updatePaginatedCourses();
  //   }
  // }
}
