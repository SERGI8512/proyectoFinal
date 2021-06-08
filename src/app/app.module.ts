import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CuidadoresComponent } from './components/cuidadores/cuidadores.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { FormularioCuidadoresComponent } from './components/Formularios/formulario-cuidadores/formulario-cuidadores.component';
import { FormularioUsuariosComponent } from './components/Formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioMascotasComponent } from './components/Formularios/formulario-mascotas/formulario-mascotas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { FormularioLogInComponent } from './components/formularios/formulario-log-in/formulario-log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    CuidadoresComponent,
    UsuariosComponent,
    MascotasComponent,
    FormularioCuidadoresComponent,
    FormularioUsuariosComponent,
    FormularioMascotasComponent,
    PaginaInicioComponent,
    DestinosComponent,
    FormularioLogInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
