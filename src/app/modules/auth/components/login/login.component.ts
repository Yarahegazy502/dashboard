import { AlertsService } from './../../../shared/services/alerts.service';
import { SocialUser } from 'angularx-social-login';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userInfo } from '../../../shared/TS Files/userInfo';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private unsubscribe: Subscription[] = [];

  isLoading: boolean = false;
  userData: any;
  contenCopied = false;

  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";
  role = 'admin';
  constructor(
    private authService: AuthService,
    private Router: Router,
    public fb: FormBuilder,
    public translateService: TranslateService,
    public alertsService: AlertsService
  ) { }

  loginForm = this.fb?.group({
    email: ["", [Validators.required, Validators.pattern(this.emailPattern), Validators.email]],
    password: ["", [Validators.required]],
  });
  get loginFormControls(): any {
    return this.loginForm?.controls;
  }

  ngOnInit(): void {
    this.userData = userInfo;

    this.authService.isUserLogin.subscribe((res: any) => {
      if (res) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });

    this.loginForm.patchValue({
      email: this.userData.email,
      password: this.userData.password
    })
  }

  signInGoogle(): void {
    this.authService.signInWithGoogle();
  }
  onSubmit(): void {
    this.authService.login(
      this.loginForm?.value?.email,
      this.loginForm?.value?.password
    );
    this.signIn();
  }
  signIn(): void {
    if (this.authService.login(this.loginForm?.value?.email, this.loginForm?.value?.password).status) {
      setTimeout(() => {
        this.alertsService.openSweetAlert('You are logged in successfully', 'success');
        this.isLoading = false;
        this.Router.navigate(['/dashboard']);
      }, 1000);
    }
    if (this.loginForm?.value?.email == 'admin@xdash.com', this.loginForm?.value?.password == 'admin') {
      setTimeout(() => {
        this.alertsService.openSweetAlert('You are logged in successfully', 'success');
        this.isLoading = false;
        this.Router.navigate(['/dashboard']);
      }, 1000);
    }
    else {
      this.isLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
