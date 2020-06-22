import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
  ) {}
  isConnect: boolean;
  ngOnInit(): void {
    this.isConnect = this.userService.isConnected;
  }
}
