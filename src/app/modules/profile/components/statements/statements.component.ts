import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {
  swiperData=[
    {img:'assets/imgs/person1.jpg',name:'Ali Ahmed',position:'Front end',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim necessitatibus eos, tempore provident voluptatum eligendi iure consequatur ut accusamus sint porro maxime eius perferendis sunt soluta sit consequuntur! Rerum, amet.',rate:2,data:[
      {item:'USA(5)',device:'Chrome - Windows',ip:'	236.125.56.78',time:'2 mins ago',status:'OK',btnColor:'success',qty:'78 PCS'},
    {item:'United Kingdom(10)',device:'Safari - Mac OS',ip:'	236.125.56.76',time:'3 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    {item:'Norway(-)',device:'	Firefox - Windows',ip:'	236.125.56.78',time:'7 mins ago',status:'ERR',btnColor:'rejected',qty:'78 PCS'},
    ]},
    {img:'assets/imgs/person1.jpg',name:'Mohamed Ahmed',position:'Back end',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim necessitatibus eos, tempore provident voluptatum eligendi iure consequatur.',rate:3,data:[

    {item:'Japan(112)',device:'	iOS - iPhone Pro',ip:'	236.125.56.76',time:'2 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    {item:'Italy(5)',device:'	Samsung Noted 5- Android',ip:'	236.125.56.77',time:'2 mins ago',status:'WRN',btnColor:'warning',qty:'8 PCS'}
    ]},
    {img:'assets/imgs/person3.jpg',name:'Ahmed Ahmed',position:'Front end',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim necessitatibus eos, tempore provident voluptatum eligendi iure consequatur ut accusamus sint porro maxime eius perferendis sunt soluta sit consequuntur! Rerum, amet.',rate:4,data:[

    {item:'Italy(5)',device:'	Samsung Noted 5- Android',ip:'	236.125.56.77',time:'2 mins ago',status:'WRN',btnColor:'warning',qty:'8 PCS'},
    {item:'Japan(112)',device:'	iOS - iPhone Pro',ip:'	236.125.56.76',time:'2 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    ]},
    {img:'assets/imgs/person1.jpg',name:'Mohamed Ahmed',position:'Back end',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim necessitatibus eos, tempore provident voluptatum eligendi iure accusamus sint porro maxime eius perferendis sunt soluta sit consequuntur! Rerum, amet.',rate:2,data:[

    {item:'Norway(-)',device:'	Firefox - Windows',ip:'	236.125.56.78',time:'7 mins ago',status:'ERR',btnColor:'rejected',qty:'78 PCS'},
      {item:'USA(5)',device:'Chrome - Windows',ip:'	236.125.56.78',time:'2 mins ago',status:'OK',btnColor:'success',qty:'78 PCS'},
    {item:'United Kingdom(10)',device:'Safari - Mac OS',ip:'	236.125.56.76',time:'3 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    ]},
    {img:'assets/imgs/person3.jpg',name:'nour Ahmed',position:'Graphic Designer',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim necessitatibus eos, tempore provident voluptatum eligendi iure accusamus sint porro maxime eius perferendis sunt soluta sit consequuntur! Rerum, amet.',rate:2,data:[

    {item:'Norway(-)',device:'	Firefox - Windows',ip:'	236.125.56.78',time:'7 mins ago',status:'ERR',btnColor:'rejected',qty:'78 PCS'},
    ]},
    {img:'assets/imgs/person3.jpg',name:'celine Ahmed',position:'Graphic Designer',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim necessitatibus eos, tempore provident voluptatum eligendi iure accusamus sint porro maxime eius perferendis sunt soluta sit consequuntur! Rerum, amet.',rate:4,data:[

      {item:'USA(5)',device:'Chrome - Windows',ip:'	236.125.56.78',time:'2 mins ago',status:'OK',btnColor:'success',qty:'78 PCS'},
    {item:'United Kingdom(10)',device:'Safari - Mac OS',ip:'	236.125.56.76',time:'3 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    ]}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
