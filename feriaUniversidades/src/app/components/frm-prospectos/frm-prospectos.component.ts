import { Component, OnInit, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-frm-prospectos',
  templateUrl: './frm-prospectos.component.html',
  styleUrls: ['./frm-prospectos.component.css']
})
export class FrmProspectosComponent implements OnInit {

  //@Output() mensaje=new EventEmitter<{nombre:string,apaterno:string}>();

  dispositivoInfo: string;
  urlReferrer: string;
  valorNombre: string = '';
  valorApaterno: string = '';
  valorEmail: string = '';
  valorCelular: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit iniciando...");
    this.obtenerInformacionDispositivo();
  }

  obtenerInformacionDispositivo(): void {
    let tipoDispositivo: string = this.obtenerTipoDispositivo();
    console.log("Tipo de dispositivo: " + tipoDispositivo);
    let navegador = navigator.userAgent;
    console.log("El navegador del usuario es: " + navegador);
    let urlActual = window.location.href;
    console.log("La URL actual es: " + urlActual);

    this.dispositivoInfo = tipoDispositivo + " " + navegador;
    this.urlReferrer = urlActual;
  }

  obtenerTipoDispositivo(): string {
    const userAgent = navigator.userAgent;

    const patrones = {
      Desktop: /Windows|Macintosh|Linux/,
      Tableta: /iPad|Android(?!.*Mobile)|Tablet|KFAPWI/,
      Movil: /Mobile|Android|iPhone|BlackBerry|IEMobile|Opera Mini/
    };

    const clavesPatrones = Object.keys(patrones);

    for (const tipo of clavesPatrones) {
      if (patrones[tipo as keyof typeof patrones].test(userAgent)) {
        return tipo;
      }
    }
    
    return "Desconocido";
  }
  onClickSiguiente() {
    // Aquí puedes colocar el código que deseas ejecutar cuando se hace clic en el botón
    console.log('Se hizo clic en el botón');
  }
}
