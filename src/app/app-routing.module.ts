import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { CuidadoresService } from './services/cuidadores.service';
import { CuidadoresComponent } from './components/cuidadores/cuidadores.component';
import { MascotasService } from './services/mascotas.service';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { FormularioUsuariosComponent } from './components/Formularios/formulario-usuarios/formulario-usuarios.component';
import { DestinosComponent } from './components/destinos/destinos.component';

const routes: Routes = [
  { path: 'api/usuarios', component: UsuariosComponent },
  { path: 'api/cuidadores', component: CuidadoresComponent },
  { path: 'api/usuarios/mascotas', component: MascotasComponent },
  { path: 'api/usuarios/new', component: FormularioUsuariosComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
