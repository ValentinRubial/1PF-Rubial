// create-account.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  contrasenia: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  createAccount(): void {
    if (this.validateForm()) {
      this.authService.createAccount(this.email, this.contrasenia, this.nombre, this.apellido)
        .then(() => {
          alert('Cuenta creada exitosamente');
          this.router.navigate(['/login']);
        })
        .catch(error => {
          alert('Esta cuenta ya fue creada anteriormente');
        });
    } else {
      alert('Por favor, complete todos los campos obligatorios de forma correcta.');
    }
  }

  public validateForm(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return !!(this.nombre && this.apellido && this.email && this.contrasenia && emailRegex.test(this.email));
  }
}
