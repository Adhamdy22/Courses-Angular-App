import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';
import { ICourse } from '../Interfaces/Courses';

export const courseResolver: ResolveFn<ICourse> = (route, state) => {
  const Courseservice = inject(CoursesService);
  const id = route.paramMap.get('id');
  if (!id) {
    throw new Error('Course ID is missing from the route parameters');
  }

  return Courseservice.getCourseDetails(id);
};
