import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SendEmailModule } from '../features/send-email/send-email.module';

const components = [
  LayoutComponent,
  TopBarComponent,
]

const modules = [
  SharedModule,
  LayoutRoutingModule,
  SendEmailModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: []
})
export class LayoutModule { }
