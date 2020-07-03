import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from './core/models';
import { SessionService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private sessionService: SessionService) {
    if (this.sessionService.getUser() == null) {
      const user = new User();
      this.sessionService.saveUser(user);
    }
    console.log(environment.production); // Logs false for default environment
  }
  title = 'myApplicationFront';

  ngOnInit(): void {
    // TODO redirection on home page with userService
  }
}
