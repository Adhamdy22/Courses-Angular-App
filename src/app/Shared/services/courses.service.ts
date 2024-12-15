import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { ICourse } from '../Interfaces/Courses';

@Injectable({
  providedIn: 'root'
})


//@Injectable()
export class CoursesService {
  private coursesApi = 'https://api.sampleapis.com/codingresources/codingResources';

  constructor(private apiService: ApiService<ICourse>) { }

  getCourses(): Observable<ICourse[]> {
    return this.apiService.getAll(this.coursesApi);
  }

  getCourseDetails(id: string): Observable<ICourse> {
    return this.apiService.getById(this.coursesApi, id);
  }

}
