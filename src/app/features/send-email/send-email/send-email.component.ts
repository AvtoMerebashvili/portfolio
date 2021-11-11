import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  toggled: boolean = false;

  @Input() textcolor:
        | 'white'
        | 'black' = 'white'

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
    this.form.valid && this.toggled 
      ? 
    this.http.send(this.form.value)
      .subscribe(
        (response) => {
          alert("message sent succesfully")
        },
        (error) => {
          alert("message wasn't sent, try again")
        }
      ) : alert("wrong fields")
  }

  setToggle(toggled:boolean){
    this.toggled = toggled;
  }
  
}
