import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuNavegationComponent  } from './Componentes/menu-navegation/menu-navegation.component';
import { GestionarPersonaComponent  } from './Componentes/gestionar-persona/gestionar-persona.component';
import { ListadoPersonaComponent  } from './Componentes//listado-persona/listado-persona.component';
import { ActualizarPersonaComponent } from './Componentes/actualizar-persona/actualizar-persona.component';
import { ListadoClaseComponent } from './Componentes/listado-clase/listado-clase.component';
const routes: Routes = [
  { path: 'Inicio', component:MenuNavegationComponent },
  { path: 'GestionarPersona', component:GestionarPersonaComponent },
  { path: 'ListadoPersona', component:ListadoPersonaComponent },
  { path: 'ActualizarPersona/:Id', component:ActualizarPersonaComponent},
  { path: 'ListadoClase/:Id', component:ListadoClaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
