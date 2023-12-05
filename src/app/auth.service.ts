// AuthService.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuariosSubject = new BehaviorSubject<{ email: string; contrasenia: string; role: string }[]>([
    { email: 'user@gmail.com', contrasenia: 'password1', role: 'user' },
    { email: 'admin@gmail.com', contrasenia: 'password2', role: 'admin' }
  ]);

  private authenticatedUser: { email: string; contrasenia: string; role: string } | null = null;

  get usuarios(): { email: string; contrasenia: string; role: string }[] {
    return this.usuariosSubject.value;
  }

  getUsuarios(): Observable<{ email: string; contrasenia: string; role: string }[]> {
    return this.usuariosSubject.asObservable();
  }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(email: string, contrasenia: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const usuario = this.usuarios.find(u => u.email === email && u.contrasenia === contrasenia);

      if (usuario) {
        this.authenticatedUser = usuario;
        this.isAuthenticatedSubject.next(true);
        resolve();
      } else {
        reject('Credenciales incorrectas');
      }
    });
  }

  // ----------------

  getRole(): string | null {
    return this.authenticatedUser ? this.authenticatedUser.role : null;
  }

  isLoggedIn(): boolean {
    return !!this.authenticatedUser;
  }

  createAccount(email: string, contrasenia: string, nombre: string, apellido: string): Promise<void> {
    const newUser = { email, contrasenia, role: 'user' };

    return new Promise((resolve, reject) => {
      const existingUser = this.usuariosSubject.value.find(u => u.email === email);
      if (existingUser) {
        reject('El usuario ya existe');
      } else {
        const updatedUsers = [...this.usuariosSubject.value, newUser];
        this.usuariosSubject.next(updatedUsers);
        resolve();
      }
    });
  }

  
  logout(): void {
    this.authenticatedUser = null;
    this.isAuthenticatedSubject.next(false);
  }
}
