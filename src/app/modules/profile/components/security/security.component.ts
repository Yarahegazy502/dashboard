import { registerables, Chart, Ticks } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  customOptions: OwlOptions = {
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
alerts=[
  {title:'Latest Announcements',p:'In the last year, you’ve probably had to adapt to new ways of living and working.',date:'Jun 10, 2021',btn:'Learn More'},
  {title:'Login Attempt Failed',p:'As we approach one year of working remotely, we wanted to take a look back and share some ways teams around the world have collaborated effectively.',date:'Oct 05, 2021',btn:'Join'},
  {title:'Top Picks For You',p:'Today we are excited to share an amazing certification opportunity which is designed to teach you everything',date:'Sep 11, 2021',btn:'Collaborate'},

]
tableContent=[
  {item:'USA(5)',device:'Chrome - Windows',ip:'	236.125.56.78',time:'2 mins ago',status:'OK',btnColor:'success',qty:'78 PCS'},
  {item:'United Kingdom(10)',device:'Safari - Mac OS',ip:'	236.125.56.76',time:'3 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
  {item:'Norway(-)',device:'	Firefox - Windows',ip:'	236.125.56.78',time:'7 mins ago',status:'ERR',btnColor:'rejected',qty:'78 PCS'},
  {item:'Japan(112)',device:'	iOS - iPhone Pro',ip:'	236.125.56.76',time:'2 mins ago',status:'OK',btnColor:'success',qty:'58 PCS'},
  {item:'Italy(5)',device:'	Samsung Noted 5- Android',ip:'	236.125.56.77',time:'2 mins ago',status:'WRN',btnColor:'warning',qty:'8 PCS'}

]
tableTwoContent=[
  {item:'DSI: Workstation 2',api:'fftt456765gjkkjhi8306767',ip:'	236.125.56.78',time:'2 mins ago',status:'License',btnColor:'success',qty:'78 PCS'},
  {item:'	ReXe: Workstation 29',api:'	none',ip:'	236.125.56.76',time:'3 mins ago',status:'Unknown',btnColor:'rejected',qty:'58 PCS'},
  {item:'RamenLC: Workstation 2',api:'ertt456765gjkkjhi83034344',ip:'	236.125.56.78',time:'7 mins ago',status:'License',btnColor:'success',qty:'78 PCS'},
  {item:'Nest Five: Workstation 86',api:'dctt456765gjkkjhi83093985',ip:'	236.125.56.76',time:'2 mins ago',status:'License',btnColor:'success',qty:'58 PCS'},
  {item:'DSI: Workstation 2',api:'none',ip:'	236.125.56.77',time:'2 mins ago',status:'Unknown',btnColor:'rejected',qty:'8 PCS'},
  {item:'ReXe: Workstation 7',api:'		dctt456765gjkkjhi83093985',ip:'	236.125.56.76',time:'2 mins ago',status:'License',btnColor:'success',qty:'58 PCS'},
  {item:'Swedline: Workstation 54',api:'dctt456765gjkkjhi83093985',ip:'	236.125.56.77',time:'2 mins ago',status:'To be Paid',btnColor:'warning',qty:'8 PCS'}


]
  activeCategory: any;
  categoryTwoActive:any
  chart:any;
  config:any={
    type: 'bar',
    data: {
        datasets: [
          {
            label: '',
             data: [50, 70, 90, 110, 80, 70,85,90,105,94,65,88],
            backgroundColor: [
                '#5ba6ff',
            ],
            borderColor: [
              '#5ba6ff',
          ],
            // backgroundColor: '#ff6688',
            tension:.8,
            barThickness:12,
            borderRadius:4

            // pointRadius:5,
        },
        {
          label: '',
           data: [50, 70, 90, 110, 80, 70,85,90,105,94,65,88],
          backgroundColor: [
              '#eff2f5',
          ],
          borderColor: [
            '#eff2f5',
        ],
          // backgroundColor: '#ff6688',
          tension:.8,
          barThickness:12,
          borderRadius:4

          // pointRadius:5,
      },
      ],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      // indexAxis:'y',
        scales: {

            y: {
              max:120,
              min: 0,
                beginAtZero: false,
                // display:false
                grid:{
                  borderWidth:0,
                  // drawOnChartArea:false
                },
                Ticks:{
                  maxTicksLimit:4
                }
            },
            x:{
              grid:{
                // lineWidth:0
                display:false

              }
            }

        },
        plugins:{
        legend:{
          padding:50,
          labels:{
            usePointStyle:true,
            pointStyle:'line',
            // padding:10,
            // boxWidth:5
            // circleWidth:5,
        },
      }
        }
    },
  }
  mychart:any;

  constructor() { }

  ngOnInit(): void {
    this.categoryTwoActive='agents'
    this.activeCategory = 'month'
    this.chart=document.getElementById('myChart')
    Chart.register(...registerables)
     this.mychart = new Chart(this.chart,this.config);
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
  categoryActive(a:any){
    if(a=='agents'){
      this.categoryTwoActive='agents'
    }else if(a=='clients'){
      this.categoryTwoActive='clients'
    }
  }
}
