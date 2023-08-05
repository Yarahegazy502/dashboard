import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UsersComponent } from './components/users/users.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
// import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProductComponent } from './components/product/product.component';
import { DatesComponent } from './components/dates/dates.component';
import { EventsFormComponent } from './components/dates/events-form/events-form.component';
// import { HeaderComponent } from './components/header/header.component';
// import { UserInfoComponent } from './components/header/user-info/user-info.component';
// import { LanguageComponent } from './components/header/language/language.component';
// import { NotificationComponent } from './components/header/notification/notification.component';
// import { ThemeComponent } from './components/header/theme/theme.component';
// import { QuickLinksComponent } from './components/header/quick-links/quick-links.component';
// import { ChatComponent } from './components/header/chat/chat.component';
// import { SearchComponent } from './components/header/search/search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    UsersComponent,
    SideMenuComponent,
    // HeaderComponent,
    // FooterComponent,
    ContentComponent,
    // UserInfoComponent,
    // LanguageComponent,
    // NotificationComponent,
    // ThemeComponent,
    // QuickLinksComponent,
    // ChatComponent,
    // SearchComponent,
    TasksComponent,
    ProductComponent,
    DatesComponent,
    EventsFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
