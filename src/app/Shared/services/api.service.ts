
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private httpclient: HttpClient) { }

  // Generic GET method
  getAll(apiUrl: string): Observable<T[]> {
    return this.httpclient.get<T[]>(apiUrl)
    // .pipe(
    //   catchError(this.HandleErrorService.HandleError)
    // );

  }



  // Generic GET by ID method
  getById(apiUrl: string, id: string | number): Observable<T> {
    return this.httpclient.get<T>(`${apiUrl}/${id}`);
  }

  // Generic POST method
  create(apiUrl: string, data: T): Observable<T> {
    return this.httpclient.post<T>(apiUrl, data);
  }

  // Generic PUT method
  update(apiUrl: string, id: string | number, data: T): Observable<T> {
    return this.httpclient.put<T>(`${apiUrl}/${id}`, data);
  }

  // Generic DELETE method
  delete(apiUrl: string, id: string | number): Observable<void> {
    return this.httpclient.delete<void>(`${apiUrl}/${id}`);
  }

}
