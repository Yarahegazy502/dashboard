import { keys } from 'src/app/modules/shared/TS Files/localstorage-key';
import { TranslationService } from 'src/app/modules/shared/services/i18n/translation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  currentLang: any;

  constructor(public translationService: TranslationService) { }

  ngOnInit(): void {
    this.currentLang = window.localStorage.getItem(
      keys.language
    );
  }

}
