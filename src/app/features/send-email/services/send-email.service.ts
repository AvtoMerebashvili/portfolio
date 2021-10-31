import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()
export class SendEmailService {
  
  constructor(
    // private http: HttpClient
  ) { }

  send(data:any){
    // this.http.post(`${environment.Mail_URL}/sendmail`, data)
  }
}
