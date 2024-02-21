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
    const selectCampus = document.getElementById('campus');
    const selectCarrera = document.getElementById('carrera');
    const selectcarerainteres = document.getElementById('carerainteres');
    const selectsubnivelinteres = document.getElementById('subnivelinteres');
    const selectnivelinteres = document.getElementById('nivelinteres');
    const selectciclo = document.getElementById('ciclo');

    let campusOptions: Set<string> = new Set();
    let carreraOptions: Set<string> = new Set();
    let carerainteresOptions: Set<string> = new Set();
    let subnivelinteresOptions: Set<string> = new Set();
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
        //console.log(data.message);
        const elements = data.message;
        elements.forEach((item: { nombrelargo_campus: string, crmit_vertical: string,
          carrerainteres: string, crmit_modalidad: string, crmit_nivelcrm: string, crmit_cicloreinscripciones : string }) => {
          // console.log(item.nombrelargo_campus);//campuslargo
          // console.log(item.crmit_vertical);//carrera
          // console.log(item.carrerainteres);//carerainteres
          // console.log(item.crmit_modalidad);//subnivelinteres
          // console.log(item.crmit_nivelcrm);//nivelinteres
          // console.log(item.crmit_cicloreinscripciones );//ciclo

          // Agregar valores al conjunto (set)
          campusOptions.add(item.nombrelargo_campus);
          carreraOptions.add(item.crmit_vertical);
          carerainteresOptions.add(item.carrerainteres);
          subnivelinteresOptions.add(item.crmit_modalidad);
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

        // Llenar select de subnivelinteres
        subnivelinteresOptions.forEach(optionValue => {
          var option = document.createElement('option');
          option.value = optionValue;
          option.textContent = optionValue;
          selectsubnivelinteres?.appendChild(option);
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

}
