import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: UserService,
  ) {}

  ngOnInit(): void {}
}
