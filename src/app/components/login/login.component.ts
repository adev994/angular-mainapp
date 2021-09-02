import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })
  constructor(private authService:AuthService,private tokenService : TokenService,private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(res => this.handle(res));
  }

  handle(res :any ){
      this.tokenService.handle(res);
      this.accountService.changeStatus(true);
      this.router.navigateByUrl("/address");
  }
}
