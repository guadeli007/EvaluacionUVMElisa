  import { HttpClient } from '@angular/common/http';
  import { Injectable, inject } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class EnviarpostService {
    constructor(private http: HttpClient) { }

    enviarInformacion(nombre: string, appaterno: string, 
      email: string, celular: string,urlreferrer: string, dispositivo: string,
      carrera: string, carreraInteres: string,subNivelInteres: string, ciclo: string,
      marcable: string, campusLargo:string, nivelInteres:string) {
      const body = new FormData();
      body.append('nombre', nombre);
      body.append('appaterno', appaterno);
      body.append('email', email);
      body.append('celular', celular);
      body.append('urlreferrer', urlreferrer);
      body.append('dispositivo', dispositivo);
      body.append('banner', 'elisa');
      body.append('CID', '2016705784.1697574806');
      body.append('verify_token', 'UVM.G0-24');
      body.append('marcable', marcable);
      body.append('campusLargo',campusLargo);
      body.append('carrera', carrera);
      body.append('carreraInteres', carreraInteres);
      body.append('subNivelInteres', subNivelInteres);
      body.append('nivelInteres',nivelInteres);
      body.append('ciclo', ciclo);
      body.append('gclid', '');
      body.append('utm_campaign', '');
           

      return this.http.post('https://webhooksqa.uvm.mx/proc-leads/lead/medios.php', body);
    }
    
  }
