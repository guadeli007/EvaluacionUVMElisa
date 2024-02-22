import { Component, OnInit } from '@angular/core';
import { EnviarpostService } from '../../services/enviarpost.service'; 
// import { DatosService } from '../../services/datos.service';

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
  valorCampus:string='';
  valorCarrera:string='';
  valorCarreraInteres:string='';
  valorNivelInteres:string='';
  valorCiclo:string='';

  //@Input() dataEntrante:{nombre:string, apaterno:string, correo:string, celular:string, dispositivoInfo:string, navegador:string,campus:string, carrera:string, carreraInteres:string, nivelInteres:string, ciclo:string};

  constructor(private enviarpostService: EnviarpostService) { }

  ngOnInit(): void {
    this.obtenerInformacionDispositivo();
    this.obtenerInformacionJson();
  }
  obtenerInformacionJson():void {
    // URL del JSON
    const url: string = 'https://uvm.mx/suitev3/get_ofertando_vigente';
    const selectCampus = document.getElementById('campus');
    const selectCarrera = document.getElementById('carrera');
    const selectcarerainteres = document.getElementById('carerainteres');
    const selectnivelinteres = document.getElementById('nivelinteres');
    const selectciclo = document.getElementById('ciclo');

    let campusOptions: Set<string> = new Set();
    let carreraOptions: Set<string> = new Set();
    let carerainteresOptions: Set<string> = new Set();
    let nivelinteresOptions: Set<string> = new Set();
    let cicloOptions: Set<string> = new Set();

    // Realizar la solicitud GET para obtener el JSON
    fetch(url)
      .then(response => {
        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error('Error al obtener el JSON: ' + response.status);
        }
        // Parsear el JSON
        return response.json();
      })
      .then(data => {
        const elements = data.message;
        elements.forEach((item: { nombrelargo_campus: string, crmit_vertical: string,
          carrerainteres: string, crmit_modalidad: string, crmit_nivelcrm: string, crmit_cicloreinscripciones : string }) => {

          // Agregar valores al conjunto (set)
          campusOptions.add(item.nombrelargo_campus);
          carreraOptions.add(item.crmit_vertical);
          carerainteresOptions.add(item.carrerainteres);
          nivelinteresOptions.add(item.crmit_nivelcrm);
          cicloOptions.add(item.crmit_cicloreinscripciones );

        });

        // Llenar select de campus
        campusOptions.forEach(optionValue => {
          var option = document.createElement('option');
          option.value = optionValue;
          option.textContent = optionValue;
          selectCampus?.appendChild(option);
        });

        // Llenar select de carrera
        carreraOptions.forEach(optionValue => {
          var option = document.createElement('option');
          option.value = optionValue;
          option.textContent = optionValue;
          selectCarrera?.appendChild(option);
        });

        // Llenar select de carerainteres
        carerainteresOptions.forEach(optionValue => {
          var option = document.createElement('option');
          option.value = optionValue;
          option.textContent = optionValue;
          selectcarerainteres?.appendChild(option);
        });

        // Llenar select de nivelinteres
        nivelinteresOptions.forEach(optionValue => {
          var option = document.createElement('option');
          option.value = optionValue;
          option.textContent = optionValue;
          selectnivelinteres?.appendChild(option);
        });

        // Llenar select de ciclo
        cicloOptions.forEach(optionValue => {
          var option = document.createElement('option');
          option.value = optionValue;
          option.textContent = optionValue;
          selectciclo?.appendChild(option);
        });

      })
      .catch(error => {
        // Manejar errores de solicitud
        console.error('Error en la solicitud:', error);
      });
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
    
    // Obtener los valores seleccionados
    this.valorCampus = (document.getElementById('campus') as HTMLSelectElement).value;
    this.valorCarrera = (document.getElementById('carrera') as HTMLSelectElement).value;
    this.valorCarreraInteres = (document.getElementById('carerainteres') as HTMLSelectElement).value;
    this.valorNivelInteres = (document.getElementById('nivelinteres') as HTMLSelectElement).value;
    this.valorCiclo = (document.getElementById('ciclo') as HTMLSelectElement).value;

    console.log("Valor campus:", this.valorCampus);
    console.log("Valor carrera:", this.valorApaterno);
    console.log("Valor carreraInteres:", this.valorCarreraInteres);
    console.log("Valor nivelInteres:", this.valorNivelInteres);
    console.log("Valor ciclo:", this.valorCiclo);

    //  this.datosService.disparadorFrmProspectos.emit({
    //   nombre: this.valorNombre,
    //   apaterno: this.valorApaterno,
    //   correo: this.valorEmail,
    //   celular: this.valorCelular,
    //   dispositivoInfo: this.dispositivoInfo,
    //   navegador: navigator.userAgent.toString(),
    //   campus:this.valorCampus,
    //   carrera:this.valorCarrera,
    //   carreraInteres:this.valorCarreraInteres,
    //   nivelInteres:this.valorNivelInteres,
    //   ciclo:this.valorCiclo
    // });

    // Llama al método enviarInformacion del servicio EnviarpostService
    this.enviarpostService.enviarInformacion(
      this.valorNombre, this.valorApaterno, this.valorEmail, this.valorCelular, navigator.userAgent.toString(), this.dispositivoInfo,
      this.valorCarrera,this.valorCarreraInteres, "", this.valorCiclo,
       "1",this.valorCampus,this.valorNivelInteres
    );

  }
  
}
