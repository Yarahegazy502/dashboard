import { ErrorComponent } from './modules/error/error.component';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: '', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'layout', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },

  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      moduleType: 'dashboard'
    }
  },
  { path: '**', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        scrollPositionRestoration: 'top',
        // scrollPositionRestoration: "enabled",
      }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
