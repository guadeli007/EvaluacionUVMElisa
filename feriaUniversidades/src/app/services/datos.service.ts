import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  @Output() disparadorFrmProspectos=new EventEmitter<{nombre:string, apaterno:string, correo:string, celular:string, dispositivoInfo:string, navegador:string}>();
  @Output() dataEntranteSelect = new EventEmitter<{campus:string, carrera:string, carreraInteres:string, nivelInteres:string, ciclo:string}>();
}
