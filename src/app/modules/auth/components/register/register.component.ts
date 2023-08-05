import { AlertsService } from './../../../shared/services/alerts.service';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password-validator';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private unsubscribe: Subscription[] = [];

  isLoading: boolean = false;
  hide: boolean = true;

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.Egypt,
    CountryISO.UnitedKingdom
  ];
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private alertsService:AlertsService
  ) { }

  ngOnInit(): void {
    this.authService.isUserLogin.subscribe((res: any) => {
      if (res) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });
  }

  registerForm = this.fb?.group({
    name: ["", Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320),
      ]),
    ],
    phone: [""],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
    ],
    confirmPassword: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ])]
  },
    {
      validator: ConfirmPasswordValidator.MatchPassword,
    }
  );
  get registerFormControls(): any {
    return this.registerForm?.controls;
  }

  register(): void {
    this.isLoading = true;
    this.alertsService.openSnackBar('successfully registered')
    setTimeout(() => {
      this.isLoading = false;
      this.route.navigate(['/auth/login']);
    }, 1000);
  }
  signInGoogle(): void {
    this.authService.signInWithGoogle();
  }

  // openSnackBar() {
  //   this._snackBar.open('successfully registered', "X");
  // }
   // this._snackBar.open('successfully registered', "x", {
    //   duration: 2000,
    // });
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }


}
