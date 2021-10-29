import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  public theme:boolean  = false;
  public page: 
    | 'home' 
    | 'about'
    | 'projects'
    | 'contact' = 'home'


  @Output() Theme = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routTo(route:any){
    this.page = route
    this.router.navigateByUrl("layout/"+route)
  }

  throwTheme(){
    this.theme = !this.theme
    this.Theme.emit(this.theme);
  }
}
