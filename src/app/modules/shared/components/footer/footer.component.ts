import { SharedService } from './../../services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenWidth=0;
  moduleType='';
  toggleFooter=false

  constructor(
    public sharedService:SharedService
  ) { }
  ngOnInit(): void {
    this.sharedService.urlData.subscribe((res:any)=>{
      this.  moduleType=res?.moduleType
    })
    this.sharedService.showSideMenu.subscribe((res:any)=>{
      this.toggleFooter=res
    })
  }

  getHeadClass(){
    let styleClass = '';
    if(this.collapsed && this.screenWidth>768 && !this.toggleFooter){
      styleClass='head-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && !this.toggleFooter){
      styleClass='head-md-screen';
    }
    return styleClass;
  }

}
