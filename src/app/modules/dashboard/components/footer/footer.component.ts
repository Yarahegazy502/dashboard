import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenWidth=0;
  constructor() { }
  ngOnInit(): void {
  }

  getHeadClass(){
    let styleClass = '';
    if(this.collapsed && this.screenWidth>768){
      styleClass='head-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass='head-md-screen';
    }
    return styleClass;
  }


}
