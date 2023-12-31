import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  collapsed:boolean=false;
  date=moment()
  activeCategory: any;
  allNotifications=[
    {img:"assets/imgs/person3.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment(),seen:"read"},
    {img:"assets/imgs/person1.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-09-01T12:58:24+02:00'),seen:"unread"},
    {img:"assets/imgs/person2.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-08-01T12:58:24+02:00'),seen:"unread"},
    {img:"assets/imgs/person3.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-07-01T12:58:24+02:00'),seen:"read"},
    {img:"assets/imgs/person1.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-06-01T12:58:24+02:00'),seen:"unread"},
    {img:"assets/imgs/person2.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-09-01T12:58:24+02:00'),seen:"read"},
    {img:"assets/imgs/person3.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-09-01T12:58:24+02:00'),seen:"read"},
    {img:"assets/imgs/person1.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-09-01T12:58:24+02:00'),seen:"unread"},
    {img:"assets/imgs/person2.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-09-01T12:58:24+02:00'),seen:"read"},
    {img:"assets/imgs/person3.jpg",text:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Maxime etnihil cum eum facilis accusamus",createdAt:moment('2022-09-01T12:58:24+02:00'),seen:"read"},
  ];
  count=0;
  unreadNotifications:any=[];
  constructor() { }
  ngOnInit(): void {
    this.activeCategory="all";
    this.numberOfUnreadnot()
  }
  numberOfUnreadnot(){
    this.allNotifications.forEach((e)=>{
      if(e.seen=='unread'){
        this.count+=1;
      }
    })
  }
  onChangeCategory(category:any){
    this.activeCategory=category;
    if(category=='all'){
      this.allNotifications=this.allNotifications
    }else if(category=="unread"){
      this.unreadNotifications=[]
      this.allNotifications.filter((i:any)=>{
        if(i.seen=="unread"){
          this.unreadNotifications.push(i)
        }
      })
    }
    console.log(this.unreadNotifications)
    console.log(this.allNotifications)
  }


}
