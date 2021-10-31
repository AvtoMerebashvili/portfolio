import { NgModule } from '@angular/core';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendEmailRoutingModule } from './send-email-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SendEmailComponent
  ],
  imports: [
    SharedModule,
    SendEmailRoutingModule
  ]
})
export class SendEmailModule { }
