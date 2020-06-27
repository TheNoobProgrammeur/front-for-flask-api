import { Component, OnInit } from '@angular/core';

import {
  faHome,
  faUserAlt,
  faPhotoVideo,
  faSignInAlt,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { SessionService } from '../core/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  Home = faHome;
  User = faUserAlt;
  Media = faPhotoVideo;
  SignInAlt = faSignInAlt;
  Info = faInfoCircle;

  ngOnInit(): void {}

  isUserActive() {
    return this.sessionService.getUser().isConected;
  }
}
