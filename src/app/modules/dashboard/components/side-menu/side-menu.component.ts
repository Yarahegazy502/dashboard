import { SharedService } from './../../../shared/services/shared.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;

  toggle = false;
  rotated = false;
  show=false;
  showSideMenu=false
  // @HostListener('window:resize',['$event'])
  // onResize(event : any){
  //   this.screenWidth=window.innerWidth;
  //   if(this.screenWidth<=768){
  //     this.collapsed=false;
  //     this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  //   }
  // }
  // itemExpanded=false;
  handelClick(item: any) {
    this.menuList.forEach((ele: any) => {
      ele.state = ele.state;
      // ele.state=false
    });
    //  item.state=true
    item.state = !item.state
    // let index=this.menuList[item];
    //     // index.state = !index.state;
    //     index.state=true
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.sharedService.showSideMenu.subscribe((res:any)=>{
      this.showSideMenu=res
    })
  }


  menuList: any = [
    {
      text: 'sideMenu.statistic',
      icon: 'fa-bar-chart',
      routerLink: '/dashboard',
      state: false
    },
    {
      text: 'sideMenu.customer',
      icon: 'fa-user-group',
      routerLink: '/dashboard/users',
      state: false
    },
    {
      text: 'sideMenu.tasks',
      icon: 'fa-list-check',
      routerLink: '/dashboard/tasks',
      state: false
    },
    {
      text: 'sideMenu.product',
      icon: 'fa-box',
      routerLink: '/dashboard/product',
      state: false
    },
    {
      text: 'sideMenu.dates',
      icon: 'fa-calendar-days',
      routerLink: '/dashboard/dates',
      state: false
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
    {
      text: 'Suit',
      icon: 'fa-suitcase',
      state: false,
      children: [
        {
          text: 'Category',
          icon: 'category',
          routerLink: '/product/category',
        },
        {
          text: 'Sub Category',
          icon: 'layers',
          routerLink: '/product/sub-category',
        },
        {
          text: 'Product',
          icon: 'all_inbox',
          routerLink: '/product/manage',
        },
      ],
    },
  ];

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    this.rotate();
    this.show=!this.show
  }

  toggleIcon() {
    this.collapsed = true
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    this.show=!this.show
  }

  rotate() {
    this.rotated = !this.rotated
  }
  constructor(
    public sharedService:SharedService
  ) { }

}
