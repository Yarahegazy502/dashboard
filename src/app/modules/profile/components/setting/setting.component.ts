import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';
import { MatDialog } from '@angular/material/dialog';
import { DeactiveAccountComponent } from './components/deactive-account/deactive-account.component';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  isEditable = false;

  userData = JSON.parse(window.localStorage.getItem(keys.userData) || '{}');
  selectedFile: any = '';
  croppedImage: any = this.userData.photo;
  imageChangedEvent: any = '';
  emailChange: any = false;
  passwordChange = false
  showCrop = false;
  url: string = '';
  isLinear = true;
  constructor(
    public route: ActivatedRoute,
    public router: Router
    , private fb: FormBuilder
    , public dialog: MatDialog
  ) {

  }
  firstFormGroup = this.fb.group({
    name: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    name2: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    name3: ['', Validators.required],
  });
  forthFormGroup = this.fb.group({
    name4: ['', Validators.required],
  });
  profileForm = this.fb?.group({
    name: ["", [Validators.required]],
    company: ["xdash", [Validators.required]],
    phone: ["010928777", [Validators.required]],
    companySite: ["Xdash", [Validators.required]],
    country: ["1", [Validators.required]],
    lang: ["1", [Validators.required]],
    time: ["1", [Validators.required]],
    currency: ["1", [Validators.required]],
    communication: ["1", [Validators.required]],
    allow: ["1", [Validators.required]],
  });
  businessForm = this.fb?.group({
    name2: ["", [Validators.required]],
    company2: ["xdash", [Validators.required]],
    phone2: ["010928777", [Validators.required]],
    companySite2: ["Xdash", [Validators.required]],
    allow2: ["1", [Validators.required]],
  });
  additionalForm = this.fb?.group({
    lang: ["1", [Validators.required]],
    time: ["1", [Validators.required]],
    currency: ["1", [Validators.required]],
    communication: ["1", [Validators.required]],
  });
  get profileFormControls() {
    return this.profileForm?.controls;
  }
  saveChanges() {
    console.log(this.profileForm.value);

  }
  ngOnInit(): void {
    this.url = this.route.snapshot.url[0].path

  }
  changeEmail() {
    this.emailChange = true
  }

  onFileSelected(event: any): void {
    this.imageChangedEvent = event;
    this.selectedFile = event.target.files[0] ?? null;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      // this.userData.photo=event.target.result;
      this.userData.photo = this.croppedImage;

    }
    reader.readAsDataURL(this.selectedFile)
    this.showCrop = true

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  ok() {
    this.userData.photo = this.croppedImage;
    this.showCrop = false
  }
  cancel() {
    this.showCrop = false

  }
  imageLoaded() {
  }
  cropperReady() {
    /* cropper ready */
  }
  loadImageFailed() {
    /* show message */
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DeactiveAccountComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((e: any) => {
      console.log('The dialog was closed');

    });
  }

}
