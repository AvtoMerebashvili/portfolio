import { NgModule } from '@angular/core';
import { SendEmailComponent } from './send-email/send-email.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SendEmailComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SendEmailComponent
  ]
})
export class SendEmailModule { }
