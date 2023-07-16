import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(private login:LoginService,private http:HttpClient,private router : Router){

  }


  username : string ="";
password : string ="";
show: boolean= false;
submit(){
console.log("user name is " + this.username)
this.clear();
}
clear(){
this.username ="";
this.password = "";
this.show = true;
}
  
//capturing user inputs from login form
    UserLoginInfo = {
        "UserName": "",
        "UserPassword": ""
    }

    userInfo:any;

//login method 

    onLogin(){
      console.log(this.UserLoginInfo);
      this.login.loginMethod(this.UserLoginInfo).subscribe(res=>{
        this.userInfo = res;
        if(res){

        }
        else{
          console.log("Wrong user Credentials");
        }
      })
      
    }





}

  

