import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonizer-chat',
  templateUrl: './buttonizer-chat.component.html',
  styleUrls: ['./buttonizer-chat.component.scss']
})
export class ButtonizerChatComponent implements OnInit {
chat=false
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.chat=!this.chat
      console.log(this.chat);

    }, 6000);
  }

}
