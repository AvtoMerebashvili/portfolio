import { Component, OnInit } from '@angular/core';
import { StylesService } from 'src/app/shared/services/styles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  get theme(){
    return this.stylesService.theme
  }

  constructor(
    private stylesService: StylesService
  ) { }

  ngOnInit(): void {
  }

  popMailer(){
    this.stylesService.setMailer('on')
  }

}
