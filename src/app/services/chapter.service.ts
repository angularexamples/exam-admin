import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ENV } from '../env.config';
import { ChapterModel } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
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
      .post(`${ENV.BASE_API}chapter`, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  editEvent$(id: number, event: ChapterModel): Observable<ChapterModel> {
    return this.http.put<ChapterModel>(`${ENV.BASE_API}chapter/${id}`, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET new event
  getChapters$(id : number) {
    return this.http
      .get<any>(`${ENV.BASE_API}chapters/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteChapterById$(id:number) {
    return this.http
    .delete<any>(`${ENV.BASE_API}chapter/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  getChapterById$(id:number) {
    return this.http
    .get<any>(`${ENV.BASE_API}chapter/${id}`, this.httpOptions)
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
