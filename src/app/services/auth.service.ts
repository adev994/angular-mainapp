import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }

  login(data:{email:string,password:string}){
  

    // do something with the response
    return this.http.post(`${environment.apiUrl}/login`,data);
  

  }
}

