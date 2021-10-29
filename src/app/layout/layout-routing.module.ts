import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('../features/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path:'about',
    loadChildren: () => import('../features/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path:'projects',
    loadChildren: () => import('../features/projects/projects.module')
      .then(m => m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
