import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {
  imgUrl="assets/imgs/bg.jpg"
  collapsed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
