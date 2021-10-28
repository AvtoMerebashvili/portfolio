import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';

const components = [
  LayoutComponent,
  TopBarComponent
]

const modules = [
  SharedModule,
  LayoutRoutingModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: []
})
export class LayoutModule { }
