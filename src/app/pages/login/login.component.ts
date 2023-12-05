// login.component.ts
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
export class LoginComponent {
  showNavBar: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);

  constructor(private authService: AuthService, private router: Router, private stateService: StateService) {
    this.authService.getUsuarios().subscribe((users: { email: string; contrasenia: string; role: string }[]) => {
      console.log('Usuarios actualizados:', users);
    });
  }

  onSubmit() {
    console.log('Formulario válido:', this.email?.valid, this.password?.valid);
    if (this.email?.valid && this.password?.valid) {
      console.log('Valores del formulario:', this.email?.value, this.password?.value);
      const email = this.email?.value;
      const password = this.password?.value;
      if (email && password) {
        this.authService.login(email, password)
          .then(() => {
            alert('Inicio de sesión exitoso');
            this.showNavBar = true;
            this.router.navigate(['/alumnos']);
          })
          .catch(error => {
            console.error('Error al iniciar sesión', error);
            alert('Error al iniciar sesión');
          });
      } else {
        alert('Por favor, ingrese un email y una contraseña válidos.');
      }
    } else {
      alert('Por favor, ingrese un email y una contraseña válidos.');
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
