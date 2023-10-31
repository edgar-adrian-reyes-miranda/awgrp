import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent {
  registroData = {
    username: '',
    email: '',
    password: ''
  };
 constructor(private router: Router){ }

 onRegistroSubmit() {
 // Aquí deberías implementar la lógica de registro
    // Por ahora, simplemente redireccionamos al menú
    console.log('Datos de registro:', this.registroData);
    alert('Registro exitoso. Redirigiendo al menú.');
    this.router.navigate(['/menu']);
}
}
