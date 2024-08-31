import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarPersonaComponent } from './Componentes/gestionar-persona/gestionar-persona.component';
import { MenuNavegationComponent } from './Componentes/menu-navegation/menu-navegation.component';
import { ListadoPersonaComponent } from './Componentes/listado-persona/listado-persona.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarPersonaComponent } from './Componentes/actualizar-persona/actualizar-persona.component';
import { ListadoClaseComponent } from './Componentes/listado-clase/listado-clase.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GestionarPersonaComponent,
    MenuNavegationComponent,
    ListadoPersonaComponent,
    ActualizarPersonaComponent,
    ListadoClaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
