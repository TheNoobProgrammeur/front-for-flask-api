import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private sessionservice: SessionService,
  ) {}

  static formatErrors(error: any) {
    console.error('Error API');
    return throwError(error.error);
  }

  get(path: string, body = {}, auth: boolean = false): Observable<any> {
    let header: HttpHeaders;

    if (auth) {
      const token = this.sessionservice.getToken();
      header = new HttpHeaders({ Authorization: 'Bearer ' + token });
    } else {
      header = new HttpHeaders();
    }

    const param = new HttpParams({ fromObject: body });

    return this.http
      .get(`${environment.api_url}${path}`, { headers: header, params: param })
      .pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body = {}, auth: boolean = false): Observable<any> {
    const headers = new HttpHeaders();
    if (auth) {
      headers.append(
        'Authorization',
        'Bearer ' + this.sessionservice.getToken(),
      );
    }

    return this.http
      .post(`${environment.api_url}${path}`, body, { headers })
      .pipe(catchError(ApiService.formatErrors));
  }

  put(path: string, payload = new HttpParams()): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(catchError(ApiService.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}`)
      .pipe(catchError(ApiService.formatErrors));
  }
}
