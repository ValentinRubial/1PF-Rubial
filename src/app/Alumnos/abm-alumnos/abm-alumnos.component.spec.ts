import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbmAlumnoComponent } from './abm-alumnos.component';
describe('AbmAlumnosComponent', () => {
  let component: AbmAlumnoComponent;
  let fixture: ComponentFixture<AbmAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmAlumnoComponent]
    });
    fixture = TestBed.createComponent(AbmAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
