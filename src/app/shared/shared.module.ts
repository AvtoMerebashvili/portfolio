import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './components/toggle/toggle.component';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
]

const components = [ToggleComponent]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components]
})
export class SharedModule { }
