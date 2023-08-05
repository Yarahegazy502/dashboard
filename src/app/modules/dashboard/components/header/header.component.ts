import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle=false;
  @Input() collapsed=false;
  @Input() screenWidth=0;
  constructor() { }
  ngOnInit(): void {
    onscroll=()=>{
      let element = document.querySelector(".navbar") as HTMLElement;
      console.log(window.pageYOffset);
      if (window.pageYOffset > element.clientHeight  ) {
        element.classList.add("bg-danger");
      } else {
        element.classList.remove("bg-danger");
      }
      }
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

  toggleMenu(){
    console.log("llm");
  }
}
