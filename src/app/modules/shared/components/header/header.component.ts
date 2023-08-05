import { SharedService } from './../../services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle: boolean = false;
  moduleType='';
  toggleSideMenu=false

  @Input() collapsed: boolean = false;
  @Input() screenWidth: any = 0;
  constructor(
    public sharedService:SharedService
  ) { }
  ngOnInit(): void {
    this.sharedService.urlData.subscribe((res:any)=>{
      this.moduleType=res?.moduleType
    })
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768 && !this.toggleSideMenu) {
      styleClass = 'head-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && !this.toggleSideMenu) {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
  toggleSide(){
    this.toggleSideMenu = !this.toggleSideMenu;
    this.sharedService.showSideMenu.next(this.toggleSideMenu)
  }
}
