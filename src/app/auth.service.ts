import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class AuthService {
  private usuarios = [
    { email: 'usuario1@example.com', contrasenia: 'password1' },
    // ... otros usuarios
  ];

  private isAuthenticated = false;

  login(email: string, contrasenia: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const usuario = this.usuarios.find(u => u.email === email && u.contrasenia === contrasenia);

      if (usuario) {
        this.isAuthenticated = true;
        resolve();
      } else {
        reject('Credenciales incorrectas');
      }
    });
  }
  
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  createAccount(email: string, contrasenia: string, nombre:string, apellido: string): Promise<void> {
   
    return Promise.resolve();
  }

  getAuthenticationStatus(): Observable<boolean> {
    return of(this.isAuthenticated);
  }
}
