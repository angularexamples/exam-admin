import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ENV } from '../env.config';
import { QuestionModel } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
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
      .post(`${ENV.BASE_API}question`, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  editEvent$(id: number, event: QuestionModel): Observable<QuestionModel> {
    return this.http.put<QuestionModel>(`${ENV.BASE_API}question/${id}`, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET new event
  getQuestions$(id : number) {
    return this.http
      .get<any>(`${ENV.BASE_API}questions/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteQuestionById$(id:number) {
    return this.http
    .delete<any>(`${ENV.BASE_API}question/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  getQuestionById$(id:number) {
    return this.http
    .get<any>(`${ENV.BASE_API}question/${id}`, this.httpOptions)
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
