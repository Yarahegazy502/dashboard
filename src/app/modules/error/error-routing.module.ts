import { Error500Component } from './components/error500/error500.component';
import { Error404Component } from './components/error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
{path:'',component:ErrorComponent,title:'error', children: [
  {
    path: '',
    component: Error404Component,
    title:'error404'
  },
  {
    path: 'error500',
    component: Error500Component,
    title:'error500'
  },
  { path: 'dashboard/profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
