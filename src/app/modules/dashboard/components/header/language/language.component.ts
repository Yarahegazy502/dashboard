import { TranslationService } from 'src/app/modules/shared/services/i18n/translation.service';
import { Component, OnInit } from '@angular/core';
import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  currentLang: any;

  constructor(public tanslationService: TranslationService) { }

  ngOnInit(): void {
    this.currentLang = window.localStorage.getItem(
      keys.language
    );
  }

}
