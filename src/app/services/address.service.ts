import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  
  constructor(private http:HttpClient,private tokenService: TokenService) { }

  getAllAddresses(){
    
    return this.http.get<any>(`${environment.apiUrl}/addresses`);
  }


addAddressTest(data:{country:string,city:string,postalCode:string,type:string}){
  
  
  return this.http.post(`${environment.apiUrl}/addresses`,data);
}

deleteAddressById(id:any){
  return this.http.delete(`${environment.apiUrl}/addresses/`+id);
}


putAddressById(id:any,data:{country:string,city:string,postalCode:string,type:string}){
  return this.http.put(`${environment.apiUrl}/addresses/`+id,data);
}

getAddressById(id:any){
  return this.http.get<any>(`${environment.apiUrl}/addresses/`+id);
}
}

