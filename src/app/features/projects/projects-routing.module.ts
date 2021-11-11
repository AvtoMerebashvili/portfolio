import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProjectsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProjectsRoutingModule { }
