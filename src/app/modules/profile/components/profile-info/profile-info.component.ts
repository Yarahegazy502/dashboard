import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  userData = JSON.parse(window.localStorage.getItem(keys.userData) || '{}');
  url: any = (this.rou.url).substring((this.rou.url).lastIndexOf('/') + 1);
  public link: string = 'https://medium.com/@garfunkel61/angular-simplest-solution-for-social-sharing-feature-6f00d5d99c5e';
  earnCount:any=0;
  projectCount:any=0;
  rateCount:any=0;
  constructor(
    private rou: Router,) { }

  ngOnInit(): void {

    var interval = setInterval(() => {
        this.earnCount++;
        if(this.earnCount>=4500){
          clearInterval(interval)
        }
      }, 10);


      var interval2 = setInterval(() => {
        this.projectCount++;
        if(this.projectCount>=75){
          clearInterval(interval2)
        }
      }, 10);

      var interval3 = setInterval(() => {
        this.rateCount++;
        if(this.rateCount>=60){
          clearInterval(interval3)
        }
      }, 10);

  }
  changeUrl() {
    setTimeout(() => {
      this.url = (this.rou.url).substring((this.rou.url).lastIndexOf('/') + 1)
    }, 10)
  }

}
