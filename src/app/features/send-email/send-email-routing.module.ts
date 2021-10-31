import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailComponent } from './send-email/send-email.component';

const routes: Routes =[
  {
    path: '',
    pathMatch: 'full',
    component: SendEmailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SendEmailRoutingModule { }
