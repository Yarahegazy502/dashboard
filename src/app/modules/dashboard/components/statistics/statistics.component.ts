import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public usersList: Array<any> = [];
  chart: any;
  toolTipLine = {};
  activeCategory: any;
  data1 = [380, 390, 500, 600, 500, 450, 630, 650, 500, 580, 430, 410];
  data2 = [500, 200, 400, 800, 300, 800, 400, 700, 500, 200, 600, 100];

  config: any = {
    type: 'line',
    data: {
      datasets: [{
        label: 'watched',
        data: this.data1,
        backgroundColor: '#ff6688',
        tension: .3,
        borderColor: '#ff6688',
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        label: 'un watched',
        data: this.data2,
        backgroundColor: '#66ff88',
        tension: .3,
        borderColor: '#66ff88',
        pointRadius: 0,
        borderWidth: 1.5
      }
      ],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {

        y: {
          max: 1000,
          min: 0,
          beginAtZero: false,
          // display:false
        },

      },
      plugins: {
        legend: {
          padding: 50,
          labels: {
            usePointStyle: true,
            pointStyle: 'line',
            // padding:10,
            // boxWidth:5
            // circleWidth:5,
          },
        }
      }
    },

    // plugins:[
    //   {
    //     id:'toolTipLine',
    //     // beforeDraw:ch=>{
    //     //   // if(ch.tooltip?.active)
    //     //   // {
    //     //   //   const ctx=ch.ctx
    //     //   //   ctx.save();
    //     //   //   const activePoint = ch.tooltip.active[0];
    //     //   // }
    //     //   const ctx=ch.ctx
    //     //   ctx.save();
    //     // }
    // },

    //   // {tooltip:{
    //   //   usePointStyle:true,
    //   //   // pointStyle:'circle'
    //   // }},
    //   // {
    //   //   legend:{
    //   //     labels:{
    //   //       usePointStyle:true,
    //   //       pointStyle:'circle',

    //   //     }
    //   //   },
    //   // }
    // ]
  }
  mychart: any;
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  elem: any;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.chart = document.getElementById('chart')
    Chart.register(...registerables)
    this.mychart = new Chart(this.chart, this.config);
    this.activeCategory = 'month'
  }


  frame(p: any): void {
    if (p == 'day') {
      this.activeCategory = 'day'
      this.mychart.config.data.datasets[0].data = [380, 490, 500, 600, 500, 350, 700, 600, 500, 580, 340, 410]
      this.mychart.config.data.datasets[1].data = [400, 600, 300, 500, 300, 200, 400, 900, 500, 200, 300, 100]
      this.mychart.update()
    }
    else if (p == 'week') {
      this.activeCategory = 'week'
      this.mychart.config.data.datasets[0].data = [280, 490, 500, 700, 500, 450, 700, 600, 500, 580, 240, 410]
      this.mychart.config.data.datasets[1].data = [400, 600, 300, 500, 300, 700, 400, 900, 500, 200, 300, 100]
      this.mychart.update()
    }
    else if (p == 'month') {
      this.activeCategory = 'month'
      this.mychart.config.data.datasets[0].data = [380, 390, 500, 600, 500, 450, 630, 650, 500, 580, 430, 410]
      this.mychart.config.data.datasets[1].data = [500, 200, 400, 800, 300, 800, 400, 700, 500, 200, 600, 100]
      this.mychart.update()
    }
  }


}
