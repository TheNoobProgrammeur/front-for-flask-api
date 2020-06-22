import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  getSessionStatus(): string {
    return window.sessionStorage.token;
  }

  saveSessionStatus(token: string) {
    window.sessionStorage.token = token;
  }

  destroySessionStatus() {
    window.sessionStorage.removeItem('token');
  }
}
