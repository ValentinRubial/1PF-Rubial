import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/Alumnos/alumnos.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  showNavBar: boolean = false;
  alumnos: any[] = [];

  constructor(private authService: AuthService, private router: Router, private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.authService.getAuthenticationStatus().subscribe(isAuthenticated => {
      this.showNavBar = isAuthenticated;

      if (isAuthenticated) {
        this.alumnoService.getAlumnosObservable().subscribe(alumnos => {
          this.alumnos = alumnos;
        });
      } else {
        this.resetState();
      }
    });
  }

  private resetState(): void {
    this.alumnos = [];
  }


  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.alumnoService.resetState();
  }
}
