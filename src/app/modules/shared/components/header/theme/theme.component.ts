import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ThemeService } from '../../../services/themes.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  theme:any=localStorage.getItem("theme");

  th:any =false
    constructor(public themeService:ThemeService, public cdr:ChangeDetectorRef) { }

    ngOnInit(): void {
      this.th=localStorage.getItem('th')
    }
    ngOnChanges(): void {


    }
  light(){
    this.th=localStorage.getItem('th')
  }
  dark(){
    this.th=localStorage.getItem('th')

  }

  reload(){
    window.location.reload()
  }

}
