import { Router } from '@angular/router';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses : Address[]=[]
  closeResult = '';

  constructor(private addressService: AddressService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.addressService.getAllAddresses().subscribe((res : Address[])=> this.addresses=res);
    ;
 }
 addAddress(){
   this.router.navigateByUrl("/address/add");
 }
 open(content:any) {
   this.addAddressForm.setValue({
    country: "", 
    city: "",
    postalCode:"",
    type:""
  })
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

id:string="";
addAddressForm=new FormGroup({
  country: new FormControl(null,[Validators.required]),
  city: new FormControl(null,[Validators.required]),
  postalCode: new FormControl(null,[Validators.required]),
  type: new FormControl(null,[Validators.required]),})

  addAddressFormMethod(){
   
  return this.addressService.addAddressTest(this.addAddressForm.value).subscribe(res=>this.handle());

  }

  handle(){
    this.getAll();
  }
  
  delete(id:any){
    return this.addressService.deleteAddressById(id).subscribe(res=>this.handle());
  }
open2(content :any,id:any){this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});

this.getAddressById(id);
this.setid(id);
}
 
putAddressById(){

  this.addressService.putAddressById(this.id,this.addAddressForm.value).subscribe();
  this.handle();
  this.getAll();
 
}

getAddressById(id:any){
  return this.addressService.getAddressById(id).subscribe((res:Address)=>this.addAddressForm.setValue({country:res.country,city:res.city,type:res.type,postalCode:res.postalCode}));
}
setid(id:any){
    this.id=id;
}
}

