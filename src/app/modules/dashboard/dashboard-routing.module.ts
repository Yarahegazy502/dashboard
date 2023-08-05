import { DatesComponent } from './components/dates/dates.component';
import { ProductComponent } from './components/product/product.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,title: "titles.dashboard",
    children: [
      {
        path: '',
        component: StatisticsComponent,
        title:'titles.statistics',
        data:{
          moduleType:'dashboard'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        title:'titles.users',
        data:{
          moduleType:'dashboard'
        }
      },
      {
        path: 'tasks',
        component: TasksComponent,
        title:'titles.tasks',
        data:{
          moduleType:'dashboard'
        }
      },
      {
        path: 'product',
        component: ProductComponent,
        title:'titles.product',
        data:{
          moduleType:'dashboard'
        }
      },
      {
        path: 'dates',
        component: DatesComponent,
        title:'titles.dates',
        data:{
          moduleType:'dashboard'
        }
      },
      { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
