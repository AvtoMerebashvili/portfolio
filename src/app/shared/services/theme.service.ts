import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme: boolean = false

  constructor() { }

  setTheme(theme:boolean){
    this.theme = theme
  }

}
