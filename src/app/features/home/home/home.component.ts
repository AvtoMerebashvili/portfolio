import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  get theme(){
    return this.themeService.theme
  }

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    
  }

}
