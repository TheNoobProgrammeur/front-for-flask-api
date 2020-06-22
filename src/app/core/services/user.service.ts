import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SessionService } from './storage.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isConnected: boolean;

  constructor(
    private apiService: ApiService,
    private sessionService: SessionService,
  ) {}

  userIsConnected() {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.sessionService.getSessionStatus(),
    });

    this.apiService.get('/ping', header).subscribe(
      (data) => {
        console.log('req is sucesful');
        this.isConnected = true;
      },
      (error) => {
        this.sessionService.destroySessionStatus();
        console.log('req is error');
        this.isConnected = false;
      },
    );
  }

  register(username: string, password: string, email: string) {
    const payload = {
      email,
      password,
      username,
    };
    this.apiService.post('/user/register', payload, true).subscribe(
      (data) => {
        this.sessionService.saveSessionStatus(data.token);
      },
      (error) => {
        this.sessionService.destroySessionStatus();
      },
    );
  }
}
