import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { registerables, Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  userData = JSON.parse(window.localStorage.getItem(keys.userData) || '{}');
  chart: any;
  config: any = {
    type: 'bar',
    data: {
      datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#5ba6ff',
          '#f35d82',
          '#6ad49b',
          '#ffcf26',
          '#8757ed',
          '#6ad4d4',
          '#5c5e6d'
        ],
        borderColor: [
          '#5ba6ff',
          '#f35d82',
          '#6ad49b',
          '#ffcf26',
          '#8757ed',
          '#6ad4d4',
          '#5c5e6d'
        ],
        // backgroundColor: '#ff6688',
        tension: .8,
        barThickness: 10,
        borderRadius: 4

        // pointRadius:5,
      },

      ],
      labels: ['Phone', 'Laptops', 'Headsets', 'Games', 'Keyboards', 'Monitors', 'Speakers'],

    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {

        y: {
          max: 16,
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
  }
  mychart: any;

  tableContent: any;
  productsDelivery: any;
  constructor(public router: Router) {

    3
    4
    5
    6
    7
    8
    9

    // this.router.events.subscribe(
    //     (event: NavigationEnd) => {
    //       if(event instanceof NavigationStart) {
    //         console.log(event);
    //       }
    //     });

    this.tableContent = [
      { item: 'HP Hyper LTR', pId: '#PXF-778', date: '16 Jan, 2022', price: '$4500', status: 'In Stock', btnColor: 'confirm', qty: '78 PCS' },
      { item: 'Macbook Air M1', pId: '#XGY-356', date: '02 Apr, 2022', price: '$1,230', status: 'In Stock', btnColor: 'confirm', qty: '58 PCS' },
      { item: 'Google Pixel 6 Pro', pId: '#PXF-778', date: '16 Jan, 2022', price: '$4500', status: 'In Stock', btnColor: 'confirm', qty: '78 PCS' },
      { item: 'Logitech MX 250', pId: '#XGY-356', date: '02 Apr, 2022', price: '$1,230', status: 'In Stock', btnColor: 'confirm', qty: '58 PCS' },
      { item: 'Dell 32 UltraSharp', pId: '#XGY-356', date: '22 Dec, 2022', price: '$1,060', status: 'Low Stock', btnColor: 'warning', qty: '8 PCS' },
      { item: 'AudioEngine HD3', pId: '#PXF-578', date: '24 Mar, 2022', price: '$1,060', status: 'Out of Stock', btnColor: 'rejected', qty: '58 PCS' },
      { item: 'Surface Laptop 4', pId: '#YHD-047', date: '22 Dec, 2022', price: '$1,060', status: 'Out of Stock', btnColor: 'rejected', qty: '8 PCS' }

    ]
    this.productsDelivery = [
      { img: 'assets/imgs/p1.gif', title: 'Elephant 1802', email: 'Jason Bourne', btn: 'up grade to pro', bg: 'success' },
      { img: 'assets/imgs/p2.gif', title: 'RiseUP', email: 'Marie Durant', btn: 'Shipping', bg: 'confirm' },
      { img: 'assets/imgs/p3.gif', title: 'Yellow Stone', email: 'Dan Wilson', btn: 'Confirmed', bg: 'rejected' },
      { img: 'assets/imgs/p4.gif', title: 'Elephant 1802', email: 'Lebron Wayde', btn: 'Delivered', bg: 'success' },
      { img: 'assets/imgs/p5.gif', title: 'RiseUP', email: 'Ana Simmons', btn: 'Shipping', bg: 'confirm' },
      { img: 'assets/imgs/p6.gif', title: 'Yellow Stone', email: 'Kevin Leonard', btn: 'Confirmed', bg: 'rejected' }
    ]
  }

  ngOnInit(): void {
    this.chart = document.getElementById('myChart')
    Chart.register(...registerables)
    this.mychart = new Chart(this.chart, this.config);
  }
  edit() {
    this.router.navigate(['/layout/profile/setting'])
  }
}
