import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { EffectCards } from "swiper";
SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {
  rating3: number;
  activeIn:any=0
  @Input() arrayList:any=[];
  data=[
    {n:4},
  ]
  index: any;

  constructor() {
    this.rating3 = 2;
  }

  ngOnInit(): void {
  }
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange(e:any) {
    // console.log(e[0].activeIndex,'slide change');
    this.activeIn=e[0].activeIndex

    // if(e[0].activeIndex==1){
    //   this.data=[
    //     {n:3},
    //   ]
    // }

    // console.log(e[0].activeIndex);

    // for (
    //   let index = 0;
    //   index < this.arrayList;
    //   index++
    // ) {
    //   let item = this.arrayList[index];
    //   item.enable = false;
    // }
    // this.index = e[0].activeIndex;
    // let activeIndex = this.arrayList[this.index];
    // activeIndex.enable = true;
  }
}
