  import { HttpClient } from '@angular/common/http';
  import { Injectable, inject } from '@angular/core';
import { Console } from 'console';

  @Injectable({
    providedIn: 'root'
  })
  export class EnviarpostService {
    constructor(private http: HttpClient) { }

    enviarInformacion(nombre: string, apaterno: string, 
      email: string, celular: string,urlreferrer: string, dispositivo: string,
      carrera: string, carreraInteres: string,subNivelInteres: string, ciclo: string,
      marcable: string, campusLargo:string, nivelInteres:string) {
      const formdata = new FormData();
      formdata.append('nombre', nombre);
      formdata.append('apaterno', apaterno);
      formdata.append('email', email);
      formdata.append('celular', celular);
      formdata.append('urlreferrer', urlreferrer);
      formdata.append('dispositivo', dispositivo);
      formdata.append('banner', 'elisa');
      formdata.append('CID', '2016705784.1697574806');
      formdata.append('verify_token', 'UVM.G0-24');
      formdata.append('marcable', marcable);
      formdata.append('campusLargo',campusLargo);
      formdata.append('carrera', carrera);
      formdata.append('carreraInteres', carreraInteres);
      formdata.append('subNivelInteres', subNivelInteres);
      formdata.append('nivelInteres',nivelInteres);
      formdata.append('ciclo', ciclo);
      formdata.append('gclid', '');
      formdata.append('utm_campaign', '');

      console.log("LAYENDO VALOR NOMBRE Y APELLIDO formdata");
      console.log(formdata.get("nombre"));
      console.log(formdata.get("apaterno"));
      console.log(formdata.get("campusLargo"));
      console.log(formdata.get("carrera"));
      console.log(formdata.get("ciclo"));

      const requestOptions: RequestInit = {
        method: "POST",
        body: formdata,
        redirect: "follow"//,
        //mode: 'no-cors'
      };
      console.log("inicia fetch");
      // fetch("https://webhooksqa.uvm.mx/proc-leads/lead/medios.php", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.error(error));

      //return this.http.post('https://webhooksqa.uvm.mx/proc-leads/lead/medios.php', formdata);
    
// console.log("Entrando al servicio");
//       const formdata = new FormData();
//       formdata.append("nombre", "Elisa DesdeSitio");
//       formdata.append("apaterno", "Simulación");
//       formdata.append("email", "inicio.uno@gmail.com");
//       formdata.append("celular", "9988775544");
//       formdata.append("urlreferrer", "http://localhost:4200/");
//       formdata.append("dispositivo", "Escritorio");
//       formdata.append("banner", "elisa");
//       formdata.append("CID", "2016705784.1697574806");
//       formdata.append("verify_token", "UVM.G0-24");
//       formdata.append("marcable", "1");
//       formdata.append("campusLargo", "EDUCACION CONTINUA");
//       formdata.append("carrera", "FINANZAS Y CONTABILIDAD");
//       formdata.append("carreraInteres", "717");
//       formdata.append("subNivelInteres", "");
//       formdata.append("nivelInteres", "DIPLOMADO");
//       formdata.append("ciclo", "24-1");
//       formdata.append("gclid", "");
//       formdata.append("utm_campaign", "");
      
//       const requestOptions: RequestInit = {
//         method: "POST",
//         body: formdata,
//         redirect: "follow"
//       };
      
//       fetch("https://webhooksqa.uvm.mx/proc-leads/lead/medios.php", requestOptions)
//         .then((response) => response.text())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));
      
     }
    
  }
