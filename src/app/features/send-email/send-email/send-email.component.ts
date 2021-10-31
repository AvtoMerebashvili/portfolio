import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  toggled: boolean = false;

  form = new FormGroup({
    mail: new FormControl("",[Validators.required, Validators.pattern('[a-zA-Z0-9.]+\\@[a-zA-Z0-9]+(\\.[a-zA-Z]+)+$')]),
    subject: new FormControl("",[Validators.required, Validators.maxLength(70)]),
    text: new FormControl("",Validators.required),
  });

  constructor(
    private http: SendEmailService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.form.valid && this.toggled ? this.http.send(this.form.value).subscribe(v => {console.log(v)}) : alert("wrong fields")
    if(this.form.valid && this.toggled){
      alert('sent')
    }
  }

  setToggle(toggled:boolean){
    this.toggled = toggled;
  }
  
}
