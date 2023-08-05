import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';
import { AuthService } from './../../../../auth/services/auth.service';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  activeUser = true;
  userData = JSON.parse(window.localStorage.getItem(keys.userData) || '{}');

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.userData);

  }

  signOut(): void {
    this.authService.signOut();
  }
}
