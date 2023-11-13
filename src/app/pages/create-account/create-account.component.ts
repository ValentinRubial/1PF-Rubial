// create-account.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

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

  constructor(private authService: AuthService) { }

  createAccount(): void {
    
    this.authService.createAccount(this.nombre, this.apellido, this.email, this.contrasenia)
      .then(() => {
        
        console.log('Cuenta creada exitosamente');
      })
      .catch(() => {
        
        console.log('Error al crear la cuenta');
      });
  }
}
