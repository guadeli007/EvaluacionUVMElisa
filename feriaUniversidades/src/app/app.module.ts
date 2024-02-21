import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrmProspectosComponent } from './components/frm-prospectos/frm-prospectos.component';
import { LeerJSONComponent } from './components/leer-json/leer-json.component';
import { EnviarAPostComponent } from './components/enviar-apost/enviar-apost.component';

@NgModule({
  declarations: [
    AppComponent,
    FrmProspectosComponent,
    LeerJSONComponent,
    EnviarAPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
