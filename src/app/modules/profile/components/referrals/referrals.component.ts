import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
  activeCategory:any;
  tableContent=[
    {order:'678935899',user:'Marcus Harris',profit:'		$1,200.00',date:'	Nov 24, 2020',status:'OK',btnColor:'success',bonus:'	26%'},
    {order:'678935899',user:'Marcus Harris',profit:'		$1,200.00',date:'	Nov 24, 2020',status:'OK',btnColor:'success',bonus:'	26%'},
    {order:'678935899',user:'	Marcus Harris',profit:'		$1,200.00',date:'	Nov 24, 2020',status:'ERR',btnColor:'success',bonus:'	26%'},
    {order:'678935899',user:'Marcus Harris',profit:'	$1,200.00',date:'	Nov 24, 2020',status:'OK',btnColor:'success',bonus:'	26%'},
    {order:'678935899',user:'Marcus Harris',profit:'		$1,200.00',date:'	Nov 24, 2020',status:'WRN',btnColor:'success',bonus:'	26%'}

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
