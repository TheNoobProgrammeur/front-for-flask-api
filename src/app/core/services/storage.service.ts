import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class SessionService {
  getToken(): string {
    return window.sessionStorage.token;
  }

  saveToken(token: string) {
    window.sessionStorage.token = token;
  }

  destroyToken() {
    window.sessionStorage.removeItem('token');
  }

  saveUser(user: User) {
    window.sessionStorage.user = JSON.stringify(user);
  }

  getUser(): User {
    return JSON.parse(window.sessionStorage.user);
  }

  destroyUser() {
    window.sessionStorage.removeItem('user');
  }
}
