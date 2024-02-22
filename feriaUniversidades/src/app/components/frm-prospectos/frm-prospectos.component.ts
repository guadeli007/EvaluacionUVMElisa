import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-frm-prospectos',
  templateUrl: './frm-prospectos.component.html',
  styleUrls: ['./frm-prospectos.component.css']
})
export class FrmProspectosComponent implements OnInit {
  
  dispositivoInfo: string;
  urlReferrer: string;
  valorNombre: string = '';
  valorApaterno: string = '';
  valorEmail: string = '';
  valorCelular: string = '';
  @Input() dataEntrante:{nombre:string, apaterno:string, correo:string, celular:string, dispositivoInfo:string, navegador:string};

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
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
    console.log("Valor del nombre:", this.valorNombre);
    console.log("Valor del apellido paterno:", this.valorApaterno);
    console.log("Valor del correo electrónico:", this.valorEmail);
    console.log("Valor del celular:", this.valorCelular);

    this.datosService.disparadorFrmProspectos.emit({
      nombre: this.valorNombre,
      apaterno: this.valorApaterno,
      correo: this.valorEmail,
      celular: this.valorCelular,
      dispositivoInfo: this.dispositivoInfo,
      navegador: navigator.userAgent
    });

  }
  
}
