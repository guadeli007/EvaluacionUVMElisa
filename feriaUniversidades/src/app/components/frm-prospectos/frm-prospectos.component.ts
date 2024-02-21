import { Component } from '@angular/core';

@Component({
  selector: 'app-frm-prospectos',
  templateUrl: './frm-prospectos.component.html',
  styleUrl: './frm-prospectos.component.css'
})
export class FrmProspectosComponent {
  dispositivoInfo: string;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit iniciando...");
    let tipoDispositivo: string;
    tipoDispositivo = this.obtenerTipoDispositivo();
    console.log("Tipo de dispositivo: " + tipoDispositivo);
    var navegador = navigator.userAgent;
    console.log("El navegador del usuario es: " + navegador);

    var urlActual = window.location.href;
    console.log("La URL actual es: " + urlActual);
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
    
    return "Desconocido"; // Se agrega un retorno al final de la función
  }
}
