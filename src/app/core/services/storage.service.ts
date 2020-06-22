import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  getSessionStatus(): boolean {
    return window.sessionStorage.actived;
  }

  saveSessionStatus(token: boolean) {
    window.sessionStorage.actived = token;
  }

  destroySessionStatus() {
    window.sessionStorage.removeItem('actived');
  }
}
