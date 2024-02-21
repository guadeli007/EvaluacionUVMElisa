import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-enviar-apost',
  templateUrl: './enviar-apost.component.html',
  styleUrls: ['./enviar-apost.component.css']
})
export class EnviarAPostComponent {

  constructor(private http: HttpClient) { }

  enviarInformacion(): Observable<any> {
  //Datos a enviar
  const datos = new FormData();
  datos.append('nombre', "Elisa");
  datos.append('appaterno', 'Garcia');
  datos.append('email', 'uno@dos.com');
  datos.append('celular', '5522223333');
  datos.append('urlreferrer', 'htps://localhost');
  datos.append('dispositivo', 'Desktop');
  datos.append('banner', 'elisa');
  datos.append('CID', '2016705784.1697574806');
  datos.append('verify_token', 'UVM.G0-24');
  datos.append('carrera', 'INGLES');
  datos.append('carreraInteres', '828');
  datos.append('subNivelInteres', 'EC');
  datos.append('ciclo', '24-1');
  datos.append('gclid', '');
  datos.append('utm_campaign', '');
  datos.append('marcable', '0');


    const cabeceras = new HttpHeaders();
    return this.http.post('https://webhooksqa.uvm.mx/proc-leads/lead/medios.php', datos, { headers: cabeceras })
      .pipe(
        tap((respuesta: any) => {
          console.log('Respuesta del servidor:', respuesta);
        }),
        catchError((error) => {
          console.error('Error al enviar la información:', error);
          throw error;
        })
      );
  }

  onClickEnviar() {
    this.enviarInformacion().subscribe();
    console.log("Se dio clic en botón");
  }

}
