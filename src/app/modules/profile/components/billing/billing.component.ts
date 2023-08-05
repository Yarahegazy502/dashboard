import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  activeCategory: any;
  tableContent=[
    {item:'USA(5)',device:'Chrome - Windows',ip:'	236.125.56.78',time:'2 mins ago',status:'OK',btnColor:'success',qty:'78 PCS'},
    {item:'United Kingdom(10)',device:'Safari - Mac OS',ip:'	236.125.56.76',time:'3 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    {item:'Norway(-)',device:'	Firefox - Windows',ip:'	236.125.56.78',time:'7 mins ago',status:'ERR',btnColor:'rejected',qty:'78 PCS'},
    {item:'Japan(112)',device:'	iOS - iPhone Pro',ip:'	236.125.56.76',time:'2 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
    {item:'Italy(5)',device:'	Samsung Noted 5- Android',ip:'	236.125.56.77',time:'2 mins ago',status:'WRN',btnColor:'warning',qty:'8 PCS'}

  ]
  constructor() { }

  ngOnInit(): void {
    this.activeCategory = 'month'
  }
  frame(p: any): void {
    if (p == 'day') {
      this.activeCategory = 'day'
      // this.mychart.config.data.datasets[0].data = [380, 490, 500, 600, 500, 350, 700, 600, 500, 580, 340, 410]
      // this.mychart.config.data.datasets[1].data = [400, 600, 300, 500, 300, 200, 400, 900, 500, 200, 300, 100]
      // this.mychart.update()
    }
    else if (p == 'week') {
      this.activeCategory = 'week'
      // this.mychart.config.data.datasets[0].data = [280, 490, 500, 700, 500, 450, 700, 600, 500, 580, 240, 410]
      // this.mychart.config.data.datasets[1].data = [400, 600, 300, 500, 300, 700, 400, 900, 500, 200, 300, 100]
      // this.mychart.update()
    }
    else if (p == 'month') {
      this.activeCategory = 'month'
      // this.mychart.config.data.datasets[0].data = [380, 390, 500, 600, 500, 450, 630, 650, 500, 580, 430, 410]
      // this.mychart.config.data.datasets[1].data = [500, 200, 400, 800, 300, 800, 400, 700, 500, 200, 600, 100]
      // this.mychart.update()
    }
  }
}
