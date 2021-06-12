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
import { FormularioLogInComponent } from './components/formularios/formulario-log-in/formulario-log-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BlogComponent } from './components/blog/blog.component';
import { DondeVaisComponent } from './components/donde-vais/donde-vais.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: PaginaInicioComponent },
  { path: 'api/usuarios', component: UsuariosComponent },
  { path: 'api/cuidadores', component: CuidadoresComponent },
  { path: 'api/mascotas', component: MascotasComponent },
  { path: 'api/mascotas/new', component: FormularioMascotasComponent },
  { path: 'api/usuarios/new', component: FormularioUsuariosComponent },
  { path: 'api/cuidadores/new', component: FormularioCuidadoresComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'login', component: LogInComponent },
  { path: 'login/cuidadores', component: FormularioLogInComponent },
  { path: 'login/usuarios', component: FormularioLogInComponent },
  { path: 'dondeVais', component: DondeVaisComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
