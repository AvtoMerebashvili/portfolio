import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';

const components = [
  LayoutComponent
]

const modules = [
  SharedModule,
  LayoutRoutingModule
]

@NgModule({
  declarations: [...components, TopBarComponent],
  imports: [...modules],
  exports: []
})
export class LayoutModule { }
