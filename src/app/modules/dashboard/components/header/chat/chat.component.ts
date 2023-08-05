import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  collapsed: boolean = false;
  activeUser = true
  data = moment();
  userData = JSON.parse(window.localStorage.getItem(keys.userData) || '{}');

  chat: any = [
    { img: 'assets/imgs/person4.jpg', name: 'Brian Cox', createdAt: moment(), text: 'How likely are you to recommend our company to your friends and family ?', type: 'one' },
    { img: this.userData.photo, name: 'You', createdAt: moment('2022-08-01T12:58:24+02:00'), text: 'Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.', type: 'two' },
    { img: 'assets/imgs/person4.jpg', name: 'Brian Cox', createdAt: moment('2022-09-01T12:58:24+02:00'), text: 'Ok, Understood!', type: 'one' },
    { img: this.userData.photo, name: 'You', createdAt: moment('2022-09-01T12:58:24+02:00'), text: 'You’ll receive notifications for all issues, pull requests!', type: 'two' },
    { img: 'assets/imgs/person4.jpg', name: 'Brian Cox', createdAt: moment('2022-09-01T12:58:24+02:00'), text: 'You can unwatch this repository immediately by clicking here: Keenthemes.com', type: 'one' },
    { img: this.userData.photo, name: 'You', createdAt: moment('2022-09-01T12:58:24+02:00'), text: 'Most purchased Business courses during this sale!', type: 'two' },
    { img: 'assets/imgs/person4.jpg', name: 'Brian Cox', createdAt: moment('2022-09-01T12:58:24+02:00'), text: 'Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided', type: 'one' },
  ]
  selectedFile: any = '';

  constructor(public fb: FormBuilder, private cdr: ChangeDetectorRef,) { }
  formSend = this.fb.group({
    message: ['', [Validators.required, Validators.minLength(3)]],
  })
  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    // if(this.selectedFile.size<=5000){
    this.formSend.patchValue({
      message: this.selectedFile.name
    });
    this.cdr?.detectChanges();
    // this.formSend.setValue()
    // }
    console.log(this.selectedFile)
  }

  addToChat(e: any, message: any) {
    this.chat.push({ img: this.userData.photo, name: 'You', createdAt: moment(), text: this.selectedFile.name, type: 'two' }),
      message.value = ''
    setTimeout(() => {
      this.chat.push({ img: 'assets/imgs/person4.jpg', name: 'Brian Cox', createdAt: moment(), text: 'Thank You', type: 'one' })
    }, 5000)
    window.scrollTo(e.yPosition)
  }
}
