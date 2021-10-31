import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  toggled: boolean = false;

  form = new FormGroup({
    mail: new FormControl("",Validators.required),
    subject: new FormControl("",Validators.required),
    text: new FormControl("",Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  setToggle(toggled:boolean){
    this.toggled = toggled;
  }
}
