import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  HandleError(ErrorResponse:HttpErrorResponse): Observable<any>{
    if(ErrorResponse.status===0){
      console.log('No response from Client');

    }
    else{
      console.log('No response from server');
    }

    return throwError(()=>new Error('Something bad happend , try again later'));

  }
}
