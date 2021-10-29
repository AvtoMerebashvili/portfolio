import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProjectsModule { }
