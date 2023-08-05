import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-deactive-account',
  templateUrl: './deactive-account.component.html',
  styleUrls: ['./deactive-account.component.scss']
})
export class DeactiveAccountComponent implements OnInit {
  hide: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<DeactiveAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder) { }

  deactiveAccountForm = this.fb?.group({
    email: [
      'qwe@qwe.qwe',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
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
  })

  get deactiveAccountFormControls(): any {
    return this.deactiveAccountForm?.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
