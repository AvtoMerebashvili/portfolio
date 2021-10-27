import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public page: 
    | 'home' 
    | 'about'
    | 'projects'
    | 'contact' = 'home'

  constructor() { }

  ngOnInit(): void {
  }

  router(route:any){
    this.page = route
    console.log(route)
  }
}
