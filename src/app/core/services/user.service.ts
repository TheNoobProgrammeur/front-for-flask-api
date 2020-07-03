import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SessionService } from './storage.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = this.sessionService.getUser();

  constructor(
    private apiService: ApiService,
    private sessionService: SessionService,
    private router: Router,
  ) {}

  userIsConnected() {
    this.apiService.get('/ping', {}, true).subscribe(
      (data) => {
        this.user.isConected = true;
        this.sessionService.saveUser(this.user);
      },
      (error) => {
        this.user.isConected = false;
        this.sessionService.saveUser(this.user);
      },
    );
  }

  register(username: string, password: string, email: string) {
    const payload = {
      email,
      password,
      username,
    };

    this.user.username = username;
    this.user.email = email;

    this.apiService.post('/user/register', payload).subscribe(
      (data) => {
        this.sessionService.saveToken(data.token);
        this.user.isConected = true;
        this.sessionService.saveUser(this.user);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.sessionService.destroyToken();
      },
    );
  }

  login(username: string, password: string) {
    const payload = {
      username,
      password,
    };

    this.user.username = username;

    this.apiService.post('/user/login', payload).subscribe(
      (data) => {
        this.sessionService.saveToken(data.token);
        this.user.isConected = true;
        this.sessionService.saveUser(this.user);
        this.router.navigate(['/home']);
      },
      (error) => {},
    );
  }
}
