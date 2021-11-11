import { Component, OnInit } from '@angular/core';
import { StylesService } from '../shared/services/styles.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  get mailer(){
    return this.stylesService.mailer 
  }

  get textcolor(){
    return this.theme ? 'black' : 'white'
  }

  year: number = new Date().getFullYear()
  theme: boolean = false    

  constructor(
    private stylesService: StylesService
  ) { }

  ngOnInit(): void {
  }

  setTheme(prop: boolean){
    this.theme = prop
    this.stylesService.setTheme(prop)
  }

  setMailer(prop: any){
    this.stylesService.setMailer(prop)
  }
}
