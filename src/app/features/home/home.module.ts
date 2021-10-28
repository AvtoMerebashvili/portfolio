import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

const components = [
  HomeComponent
]

const modules = [
  SharedModule,
  HomeRoutingModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components]
})
export class HomeModule { }
