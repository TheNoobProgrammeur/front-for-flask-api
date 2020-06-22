import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SessionService } from './storage.service';

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
    this.apiService.get('/ping').subscribe(
      (data) => {
        this.sessionService.saveSessionStatus(true);
        console.log('req is sucesful');
      },
      (error) => {
        this.sessionService.saveSessionStatus(false);
        console.log('req is error');
      },
    );
  }
}
