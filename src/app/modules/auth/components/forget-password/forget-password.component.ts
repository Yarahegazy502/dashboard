import { AlertsService } from './../../../shared/services/alerts.service';
import { Subscription } from 'rxjs';
import { VerfiyPasswordComponent } from './../verfiy-password/verfiy-password.component';
import { MatDialog } from '@angular/material/dialog';

import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetPasswordComponent implements OnInit {
  private unsubscribe: Subscription[] = [];

  isLoading = false
  hide = true;
  emaill: any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public alertsService:AlertsService
  ) { }

  confirmPasswordForm = this.fb?.group({
    email: [
      'qwe@qwe.qwe',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320),
      ]),
    ],

  }
  );
  get confirmPasswordFormControls(): any {
    return this.confirmPasswordForm?.controls;
  }

  ngOnInit(): void { }

  showDialog(): void {
    this.isLoading = true
    this.alertsService.openToastr('error','hello',7000,'toast-top-right')
    setTimeout(() => {
      this.isLoading = false
      this.openDialog('0ms', '0ms', this.confirmPasswordFormControls.email);
    }, 1500);
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, email: any): void {
    const dialogRef = this.dialog.open(VerfiyPasswordComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        email: email
      }

    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
