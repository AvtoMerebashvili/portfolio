import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  theme: boolean = false;
  mailer: 
    | 'on'
    | 'off'
    | 'closed' = 'closed'

  constructor() { }

  setTheme(theme:boolean){
    this.theme = theme
  }

  setMailer(prop:any){
    this.mailer = prop
  }

}
