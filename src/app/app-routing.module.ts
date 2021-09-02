import { AppComponent } from './app.component';
import { Page404Component } from './components/partials/page404/page404.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes=[
  {path:"",redirectTo:"address",pathMatch:'full'},
 
  {path:"address",children:
  [{path:"add",component:AddAddressComponent},
    {path:"edit/:id",component:EditAddressComponent},
    {path:"",component:ListAddressComponent}

  ],canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canActivate:[LoginGuard]},
{
  path:"**",component:Page404Component
}


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
