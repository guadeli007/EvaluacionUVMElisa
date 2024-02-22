import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrmProspectosComponent } from './components/frm-prospectos/frm-prospectos.component';
import { LeerJSONComponent } from './components/leer-json/leer-json.component';
import { EnviarAPostComponent } from './components/enviar-apost/enviar-apost.component';
import { EnviarpostService } from './services/enviarpost.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrmProspectosComponent,
    LeerJSONComponent,
    EnviarAPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EnviarpostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
