import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
