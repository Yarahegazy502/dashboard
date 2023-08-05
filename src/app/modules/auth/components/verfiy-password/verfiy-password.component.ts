import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verfiy-password',
  templateUrl: './verfiy-password.component.html',
  styleUrls: ['./verfiy-password.component.scss']
})
export class VerfiyPasswordComponent implements OnInit {
  private unsubscribe: Subscription[] = [];

  constructor(
    private route: Router,
    public dialogRef: MatDialogRef<VerfiyPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  move(e: any, p: any, c: any, n: any): any {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if (length == maxlength) {
      if (n != "") {
        n.focus();
      }
    }
    if (e.key === "Backspace") {
      if (p != "") {
        p.focus();
      }
    }
  }
  goToNewPassword(): void {
    this.route.navigate(['/auth/createPassword']);
    this.onNoClick();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
