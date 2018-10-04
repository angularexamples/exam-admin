import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ENV } from '../env.config';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'quiz'
    })
  };
  constructor(private http: HttpClient) { }

  // POST new event
  postEvent$(event) {
    return this.http
      .post(`${ENV.BASE_API}course`, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  editEvent$(id: number, event: CourseModel): Observable<CourseModel> {
    return this.http.put<CourseModel>(`${ENV.BASE_API}course/${id}`, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET new event
  getCourses$() {
    return this.http
      .get<any>(`${ENV.BASE_API}courses`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteCourseById$(id:number) {
    return this.http
    .delete<any>(`${ENV.BASE_API}course/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  getCourseById$(id:number) {
    return this.http
    .get<any>(`${ENV.BASE_API}course/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Error: Unable to complete request. please try again later.');
  };
}
