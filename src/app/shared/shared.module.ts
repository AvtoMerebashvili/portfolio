import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SendEmailService } from '../features/send-email/services/send-email.service';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule
]

const components = [
  ToggleComponent
]

const services = [
  SendEmailService
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [...services],
  exports: [...modules, ...components]
})
export class SharedModule { }
