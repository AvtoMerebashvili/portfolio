import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'email',
    loadChildren: () => import('../send-email/send-email.module')
      .then(m => m.SendEmailModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class HomeRoutingModule { }
