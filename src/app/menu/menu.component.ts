import { Component } from '@angular/core';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { RegistroAdminComponent } from '../registro-admin/registro-admin.component';
import { Routes } from '@angular/router';

const routes:Routes=[
  {path:'login', component: LoginAdminComponent},
  {path:'registro', component: RegistroAdminComponent},
  
  {path:'', redirectTo: '/login', pathMatch: 'full'},
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',

  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  isOpen=false;
  
  toggleMenu() {
    this.isOpen= !this.isOpen;
  }

  
}
