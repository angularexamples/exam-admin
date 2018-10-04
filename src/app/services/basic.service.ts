import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class BasicService {

  constructor(private http: HttpClient) { }
  
  getData(dataUrl = '/assets/sidebar-menu.json'): Promise<any[]> {
    return this.http
      .get(dataUrl, {}).toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
