import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { CuidadoresComponent } from './components/cuidadores/cuidadores.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { FormularioUsuariosComponent } from './components/Formularios/formulario-usuarios/formulario-usuarios.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { FormularioCuidadoresComponent } from './components/Formularios/formulario-cuidadores/formulario-cuidadores.component';
import { FormularioMascotasComponent } from './components/Formularios/formulario-mascotas/formulario-mascotas.component';

const routes: Routes = [
  { path: 'api/usuarios', component: UsuariosComponent },
  { path: 'api/cuidadores', component: CuidadoresComponent },
  { path: 'api/mascotas', component: MascotasComponent },
  { path: 'api/mascotas/new', component: FormularioMascotasComponent },
  { path: 'api/usuarios/new', component: FormularioUsuariosComponent },
  { path: 'api/cuidadores/new', component: FormularioCuidadoresComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'login/cuidadores', component: FormularioCuidadoresComponent },
  { path: 'login/usuarios', component: FormularioUsuariosComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
