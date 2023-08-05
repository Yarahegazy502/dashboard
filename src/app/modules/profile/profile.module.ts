import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SecurityComponent } from './components/security/security.component';
import { BillingComponent } from './components/billing/billing.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { DeactiveAccountComponent } from './components/setting/components/deactive-account/deactive-account.component';
import { StatementsComponent } from './components/statements/statements.component';
import { ShareButtonComponent } from './components/profile-info/components/share-button/share-button.component';

@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    SettingComponent,
    ProfileInfoComponent,
    SecurityComponent,
    BillingComponent,
    ReferralsComponent,
    DeactiveAccountComponent,
    StatementsComponent,
    ShareButtonComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ImageCropperModule
  ]
})
export class ProfileModule { }
