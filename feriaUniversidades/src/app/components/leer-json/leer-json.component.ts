import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leer-json',
  templateUrl: './leer-json.component.html',
  styleUrls: ['./leer-json.component.css']
})
export class LeerJSONComponent implements OnInit {
  ngOnInit() {

// URL del JSON
const url: string = 'https://uvm.mx/suitev3/get_ofertando_vigente';

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
    //console.log(data.message);
    const elements=data.message;
    elements.forEach((item: { nombrelargo_campus: any; }) => {
      console.log(item.nombrelargo_campus);
    });
    
  })
  .catch(error => {
    // Manejar errores de solicitud
    console.error('Error en la solicitud:', error);
  });




  }
  
}