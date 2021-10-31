import { NgModule } from '@angular/core';
import { SendEmailComponent } from './send-email/send-email.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SendEmailService } from './services/send-email.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    SendEmailComponent
  ],
  imports: [
    SharedModule,
  ],
  providers:[
    SendEmailService
  ],
  exports: [
    SendEmailComponent
  ]
})
export class SendEmailModule { }
