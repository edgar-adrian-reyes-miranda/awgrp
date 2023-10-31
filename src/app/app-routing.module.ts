import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
const routes: Routes = [
  {path: 'login', component: LoginAdminComponent},
  {path: 'registro', component: RegistroAdminComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
