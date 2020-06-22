import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  static formatErrors(error: any) {
    console.error('Erreur API');
    return throwError(error.error);
  }

  // @ts-ignore
  get(path: string, params: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, { headers: params })
      .pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(ApiService.formatErrors));
  }

  put(path: string, body = {}): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(ApiService.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}`)
      .pipe(catchError(ApiService.formatErrors));
  }
}
