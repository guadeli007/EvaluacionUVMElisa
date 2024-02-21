import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrl: './app.component.css',
  template: `
    <h1>App Principal</h1>
    <app-enviar-apost></app-enviar-apost>
  `,
})
export class AppComponent {
  title = 'Feria de las Universidades';
}
