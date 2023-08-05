import { SharedService } from './modules/shared/services/shared.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { ThemeService } from './modules/shared/services/themes.service';
import { TranslationService } from 'src/app/modules/shared/services/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { keys } from './modules/shared/TS Files/localstorage-key';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dashboard-structure';
  showFiller = false;
  languages = ["en", "ar"];
url={}
  browserLang: any;
  menuList: any[] = [];
  currentTheme = localStorage.getItem('theme');
  favIcon: HTMLLinkElement | any = document.querySelector("#appIcon");


  constructor(
    private translate: TranslateService,
    public translationService: TranslationService,
    public themeService: ThemeService,
    public router:Router,
    private activatedRoute: ActivatedRoute,
    public sharedService:SharedService
  ) {

     let data=this.activatedRoute.snapshot.data;
      console.log(data);

    this.translate.addLangs(this.languages);
    const currentLang = localStorage.getItem(
      keys.language
    );
    if (currentLang !== null && currentLang !== undefined) {
      this.translate.use(currentLang);

      let direction =
        localStorage.getItem(keys.language) === "ar"
          ? "rtl"
          : "ltr";
      document.documentElement.dir = direction;
      document.documentElement.lang = currentLang;

      let getMain = document.getElementsByTagName("html")[0];
      getMain.setAttribute("lang", currentLang);
      getMain.setAttribute("class", currentLang);
    } else {
      this.browserLang = this.translate.getBrowserLang();
      localStorage.setItem(
        keys.language,
        this.browserLang
      );
      this.translate.use(this.browserLang);
      this.translate.setDefaultLang(this.browserLang);
      window.location.reload();
    }


    this.router.events
      .pipe(
        filter((event:any) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data) {
              return child.snapshot.data;
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.sharedService.urlData.next(data)
          this.url=data;
          console.log(this.url);

        }
      });
  }

  ngOnInit() {

    this.favIcon.href = "/assets/imgs/logo.svg"

    if (this.currentTheme == "light") {
      this.themeService.setLightTheme()
    } else if (this.currentTheme == "dark") {
      this.themeService.setDarkTheme()
    } else {
      this.themeService.setLightTheme()
    }
    // this.menuList = this.httpService.getList<any>("/assets/menu.json")
  }



}
