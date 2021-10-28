import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routTo(route:any){
    this.page = route
    this.router.navigateByUrl("layout/"+route)
  }
}
