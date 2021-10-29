import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  theme: boolean = false

  constructor(
    private themeServise: ThemeService
  ) { }

  ngOnInit(): void {
  }

  setTheme(prop: boolean){
    this.theme = prop
    this.themeServise.setTheme(prop)
  }
}
