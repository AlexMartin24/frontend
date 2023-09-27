import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar el módulo de formularios reactivos

//MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, AsyncPipe, NgSwitch, NgSwitchCase, NgIf } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './componentes/Globales/inicio-sesion/inicio-sesion.component';
import { ListarUsuariosComponent } from './componentes/Usuarios/listar-usuarios/listar-usuarios.component';
import { AltaUsuariosComponent } from './componentes/Usuarios/alta-usuarios/alta-usuarios.component';
import { NavBarComponent } from './componentes/Globales/nav-bar/nav-bar.component';
import { PieComponent } from './componentes/Globales/pie/pie.component';
import { BienvenidoComponent } from './componentes/Globales/bienvenido/bienvenido.component';
import { ListarEstablecimientosComponent } from './componentes/Establecimientos/listar-establecimientos/listar-establecimientos.component';
import { EditarUsuariosComponent } from './componentes/Usuarios/editar-usuarios/editar-usuarios.component';
import { EstablecimientoComponent } from './componentes/Establecimientos/establecimiento/establecimiento.component';
import { AltaEstablecimientosComponent } from './componentes/Establecimientos/alta-establecimientos/alta-establecimientos.component';
import { EditarEstablecimientosComponent } from './componentes/Establecimientos/editar-establecimientos/editar-establecimientos.component';
import { Error404Component } from './componentes/Globales/error404/error404.component';
import { IncidenteComponent } from './componentes/Incidentes/incidente/incidente.component';
import { CargarIncidenteComponent } from './componentes/Incidentes/cargar-incidente/cargar-incidente.component';
import { ListarIncidentesComponent } from './componentes/Incidentes/listar-incidentes/listar-incidentes.component';
import { SobreNosotrosComponent } from './componentes/Globales/nosotros/sobre-nosotros.component';
import { ContactoComponent } from './componentes/Globales/contacto/contacto.component';
import { UsuarioComponent } from './componentes/Usuarios/usuario/usuario.component';
import { PuestoComponent } from './componentes/Puestos/puesto/puesto.component';
import { SectorComponent } from './componentes/Sectores/sector/sector.component';
import { EquipoComponent } from './componentes/Equipos/equipo/equipo.component';
import { AltaSectorComponent } from './componentes/Sectores/alta-sector/alta-sector.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { VistaTecnicoComponent } from './componentes/vistas/vista-tecnico/vista-tecnico.component';
import { EditarIncidentesComponent } from './componentes/Incidentes/editar-incidentes/editar-incidentes.component';
import { AltaEquiposComponent } from './componentes/Equipos/alta-equipos/alta-equipos.component';
import { EditarEquiposComponent } from './componentes/Equipos/editar-equipos/editar-equipos.component';
import { GestionComponent } from './componentes/vistas/gestion/gestion.component';
import { EditarSectorComponent } from './componentes/Sectores/editar-sector/editar-sector.component';
import { AltaPuestoComponent } from './componentes/puestos/alta-puesto/alta-puesto.component';
import { EditarPuestoComponent } from './componentes/puestos/editar-puesto/editar-puesto.component';
import { VistaGerencialComponent } from './componentes/vistas/vista-gerencial/vista-gerencial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './componentes/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ListarUsuariosComponent,
    AltaUsuariosComponent,
    NavBarComponent,
    PieComponent,
    BienvenidoComponent,
    ListarEstablecimientosComponent,
    EditarUsuariosComponent,
    EstablecimientoComponent,
    AltaEstablecimientosComponent,
    EditarEstablecimientosComponent,
    Error404Component,
    IncidenteComponent, 
    CargarIncidenteComponent,
    ListarIncidentesComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    UsuarioComponent,
    PuestoComponent,
    EquipoComponent,
    SectorComponent,
    AltaSectorComponent,
    VistaTecnicoComponent,
    EditarIncidentesComponent,
    AltaEquiposComponent,
    EditarEquiposComponent,
    GestionComponent,
    EditarSectorComponent,
    AltaPuestoComponent,
    EditarPuestoComponent,
    VistaGerencialComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,

    //material
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    NgIf,
    NgSwitch,
    NgSwitchCase,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
