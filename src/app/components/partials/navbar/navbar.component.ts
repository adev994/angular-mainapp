import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from './../../../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser :null;
  constructor(private tokenService: TokenService,private accountService :AccountService,private router:Router) { }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res=>{
      this.currentUser =this.tokenService.getInfos();}
      );
  }

  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/login");

  }
}
