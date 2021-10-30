import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  get theme(){
    return this.themeService.theme
  }

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

}
