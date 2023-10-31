import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent {
  loginData={
    username:'',
    password:'',
  };

  constructor(private router: Router){}

  onLoginSubmit() {
   // Lógica de autenticación básica (¡No usar en producción!)
   if (this.loginData.username === 'usuario' && this.loginData.password === 'contraseña') {
    // Autenticación exitosa, redirigir al menú
    this.router.navigate(['/menu']);
  } else {
    // Autenticación fallida, mostrar mensaje de error o implementar otra lógica
    alert('Credenciales incorrectas');
  }
  }
}
