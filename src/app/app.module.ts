import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CuidadoresComponent } from './components/cuidadores/cuidadores.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { FormularioCuidadoresComponent } from './components/Formularios/formulario-cuidadores/formulario-cuidadores.component';
import { FormularioUsuariosComponent } from './components/Formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioMascotasComponent } from './components/Formularios/formulario-mascotas/formulario-mascotas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    NavBarComponent,
    CuidadoresComponent,
    UsuariosComponent,
    MascotasComponent,
    FormularioCuidadoresComponent,
    FormularioUsuariosComponent,
    FormularioMascotasComponent,
    PaginaInicioComponent

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
