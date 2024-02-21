import { Component } from '@angular/core';
import { EnviarpostService } from '../../services/enviarpost.service'; // Ajusta la ruta según la ubicación real del servicio

@Component({
  selector: 'app-enviar-apost',
  templateUrl: './enviar-apost.component.html',
  styleUrls: ['./enviar-apost.component.css']
})
export class EnviarAPostComponent {
  constructor(private enviarpostService: EnviarpostService) { } // Inyecta el servicio en el constructor

    //console.log("Clic al botón");

    enviarDatos() {
    //console.log("Clic al botón");
    const nombre = 'Elisa';
    const apaterno = 'Garcia';
    const email = 'uno@dos.com';
    const celular = '5522223333';
    const urlreferrer = 'htps://localhost';
    const dispositivo = 'Desktop';
    const carrera = 'INGLES';
    const carreraInteres = '828';
    const subNivelInteres = 'EC';
    const ciclo = '24-1';
    const marcable = '0';
    const campusLargo='EN LINEA';
    const nivelInteres='EC'

    this.enviarpostService.enviarInformacion(nombre, apaterno, email, celular, urlreferrer, dispositivo, carrera,carreraInteres, subNivelInteres, ciclo, marcable,campusLargo,nivelInteres).subscribe({
      next: (response) => {
        console.log(response); 
      },
      error: (error) => {
        console.error(error); 
      }
    });
  }
}
