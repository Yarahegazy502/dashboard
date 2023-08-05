import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './../register/confirm-password-validator';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit {
  private unsubscribe: Subscription[] = [];
  isLoadingBtn: boolean = false;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  confirmPasswordForm = this.fb?.group({
    currentPassword: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
    ],
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
  get confirmPasswordFormControls(): any {
    return this.confirmPasswordForm?.controls;
  }

  onSubmit(): void {
    this.isLoadingBtn = true;
    setTimeout(() => {
      this.isLoadingBtn = false;
      this.route.navigate(['/auth/login']);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
