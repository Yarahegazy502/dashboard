import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './components/swiper/swiper.component';
import { owlCarouselTextComponent } from './components/owl-carousel-text/owlCarouseltextComponent';
import { ClipboardModule } from 'ngx-clipboard';
import { TimeagoModule } from 'ngx-timeago';
import { TranslationChildModule } from './translation-child/translation-child.module';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from '@coreui/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ButtonizerChatComponent } from './components/buttonizer-chat/buttonizer-chat.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrComponent } from './components/toastr/toastr.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { NgxGalleryComponent } from './components/ngx-gallery/ngx-gallery.component'; // a plugin!
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HeaderComponent } from './components/header/header.component';
import { ChatComponent } from './components/header/chat/chat.component';
import { LanguageComponent } from './components/header/language/language.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { QuickLinksComponent } from './components/header/quick-links/quick-links.component';
import { SearchComponent } from './components/header/search/search.component';
import { ThemeComponent } from './components/header/theme/theme.component';
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import { FooterComponent } from './components/footer/footer.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
const sharedModules = [
  AngularMaterialModule,
  HttpClientModule,
  TranslationChildModule,
  ClickOutsideModule,
  ReactiveFormsModule,
  NgPipesModule,
  TimeagoModule,
  Ng2SearchPipeModule,
  FormsModule,
  ClipboardModule,
  NgbModule,
  CarouselModule,
  SwiperModule,
  NgxStarRatingModule,
  NgxPaginationModule,
  NgbModule,
  // ToastrModule.forRoot(),
  ToastrModule,
  NgSelectModule,
  BsDatepickerModule,
  TimepickerModule,
  AngularEditorModule,
  NgxMaterialTimepickerModule,
  FullCalendarModule,
  NgxGalleryModule,
  RouterModule
]
const sharedComponents = [
  ScrollToTopComponent,
  owlCarouselTextComponent,
  ButtonizerChatComponent,
  SwiperComponent,
  ToastrComponent,
  ProgressBarComponent,
  NgxGalleryComponent,
  HeaderComponent,
  ChatComponent,
  LanguageComponent,
  NotificationComponent,
  QuickLinksComponent,
  SearchComponent,
  ThemeComponent,
  UserInfoComponent,
  FooterComponent,
]
@NgModule({
  declarations: [
    ...sharedComponents,

  ],
  imports: [
    CommonModule,
    ...sharedModules,
  ],
  exports: [...sharedModules, ...sharedComponents]
})
export class SharedModule { }
