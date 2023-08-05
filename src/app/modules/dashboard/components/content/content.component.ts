import { SharedService } from './../../../shared/services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() collapsed=false;
  @Input() screenWidth=0;
  toggleContent=false
  constructor(
    public sharedService:SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.showSideMenu.subscribe((res:any)=>{
      this.toggleContent=res
    })
  }
  getBodyClass() :string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth>768 && !this.toggleContent){
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && !this.toggleContent){
      styleClass='body-md-screen';
    }
    return styleClass;
  }


}
