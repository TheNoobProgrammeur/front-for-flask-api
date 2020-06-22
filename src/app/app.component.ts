import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { UserService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {
    console.log(environment.production); // Logs false for default environment
  }
  title = 'myApplicationFront';

  ngOnInit(): void {
    // TODO redirection on home page with userService
  }
}
