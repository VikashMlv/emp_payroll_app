import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginApi: string = 'http://onlinetestapi.gerasim.in/api/Aqua/login';
  constructor(private http: HttpClient) { }


  loginMethod(obj: any) {
    return this.http.post(this.loginApi, obj)

  }

  
}
