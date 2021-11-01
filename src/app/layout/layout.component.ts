import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  mailer:
    | 'on'
    | 'off'
    | 'closed' = 'on'

  year: number = new Date().getFullYear()
  theme: boolean = false

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

  setTheme(prop: boolean){
    this.theme = prop
    this.themeService.setTheme(prop)
  }

  setMailer(prop: any){
    this.mailer = prop
  }
}
