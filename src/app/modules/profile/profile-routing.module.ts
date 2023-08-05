import { ReferralsComponent } from './components/referrals/referrals.component';
import { BillingComponent } from './components/billing/billing.component';
import { SecurityComponent } from './components/security/security.component';
import { SettingComponent } from './components/setting/setting.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { StatementsComponent } from './components/statements/statements.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: '', component: OverviewComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'referrals', component: ReferralsComponent },
      { path: 'statements', component: StatementsComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
