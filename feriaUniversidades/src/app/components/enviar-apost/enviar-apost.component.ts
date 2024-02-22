import { Component } from '@angular/core';
import { EnviarpostService } from '../../services/enviarpost.service'; 
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-enviar-apost',
  templateUrl: './enviar-apost.component.html',
  styleUrls: ['./enviar-apost.component.css']
})
export class EnviarAPostComponent {
  constructor(private enviarpostService: EnviarpostService,private datosService: DatosService) { } 

  public nombreDesdeForm:string;
  enviarInformacion() {
    let nombre:string = '';//'Elisa';
    let apaterno:string = '';//'Desde Formulario';
    let email:string = '';//'tres@gmail.com';
    let celular:string = '';//'5252525252';
    let urlreferrer:string = '';//'http://localhost:4200/';
    let dispositivo:string = '';//'Escritorio';
    let marcable:string = '1';//'1';
    let campusLargo:string='';//'EDUCACION CONTINUA';
    let carrera:string = '';//'FINANZAS Y CONTABILIDAD';
    let carreraInteres:string = '';//'764';
    let subNivelInteres:string = '';
    let nivelInteres:string='';//'ECDIPLOMADO'
    let ciclo:string ='';// '24-2';

    // Suscribirse al evento disparadorFrmProspectos para recibir los datos emitidos
    this.datosService.disparadorFrmProspectos.subscribe((datos: {nombre:string, apaterno:string, correo:string, celular:string, dispositivoInfo:string, navegador:string}) => {
      nombre=datos.nombre;
      apaterno=datos.apaterno;
      email=datos.correo;
      celular=datos.celular;
      dispositivo=datos.dispositivoInfo;
      urlreferrer=datos.navegador;

      console.log("Datos recibidos desde el servicio:");
      console.log("Nombre:", datos.nombre);
      console.log("Apellido Paterno:", datos.apaterno);
      console.log("Correo electrónico:", datos.correo);
      console.log("Celular:", datos.celular);
      console.log("Información del dispositivo:", datos.dispositivoInfo);
      console.log("Navegador:", datos.navegador);
    });

    this.datosService.dataEntranteSelect.subscribe((datos:{campus:string, carrera:string, carreraInteres:string, nivelInteres:string, ciclo:string}) => {
      campusLargo=datos.campus;
      carrera = datos.carrera;
      carreraInteres = datos.carreraInteres;
      nivelInteres=datos.nivelInteres;
      ciclo =datos.ciclo;
      
      console.log("Datos recibidos desde el servicio de los selects:");
      console.log("Campus:", datos.campus);
      console.log("Carrera:", datos.carrera);
      console.log("CarreraInteres:", datos.carreraInteres);
      console.log("nivelInteres:", datos.nivelInteres);
      console.log("Ciclo:", datos.ciclo);
    });

    // Llama al método enviarInformacion del servicio EnviarpostService
    this.enviarpostService.enviarInformacion(
      nombre, apaterno, email, celular, urlreferrer, dispositivo, carrera,carreraInteres, subNivelInteres, ciclo,
       marcable,campusLargo,nivelInteres
    );
  }
}
    //console.log("Clic al botón");

    // enviarInformacion() {
    // const nombre = 'Elisa';
    // const apaterno = 'Garcia';
    // const email = 'uno@dos.com';
    // const celular = '5522223333';
    // const urlreferrer = 'https://guadeli007.github.io/EvaluacionUVMElisa/';
    // const dispositivo = 'Desktop';
    // const carrera = 'INGLES';
    // const carreraInteres = '828';
    // const subNivelInteres = 'EC';
    // const ciclo = '24-1';
    // const marcable = '0';
    // const campusLargo='EN LINEA';
    // const nivelInteres='EC'

    // this.enviarpostService.enviarInformacion(nombre, apaterno, email, celular, urlreferrer, dispositivo, carrera,carreraInteres, subNivelInteres, ciclo, marcable,campusLargo,nivelInteres).subscribe({
    //   next: (response) => {
    //     console.log(response); 
    //   },
    //   error: (error) => {
    //     console.error(error); 
    //   }
    // });
//    }
// }
