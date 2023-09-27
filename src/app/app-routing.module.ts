import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './componentes/Globales/inicio-sesion/inicio-sesion.component';
import { ListarUsuariosComponent } from './componentes/Usuarios/listar-usuarios/listar-usuarios.component';
import { AltaUsuariosComponent } from './componentes/Usuarios/alta-usuarios/alta-usuarios.component';
import { ListarEstablecimientosComponent } from './componentes/Establecimientos/listar-establecimientos/listar-establecimientos.component';
import { EditarUsuariosComponent } from './componentes/Usuarios/editar-usuarios/editar-usuarios.component';
import { BienvenidoComponent } from './componentes/Globales/bienvenido/bienvenido.component';
import { AltaEstablecimientosComponent } from './componentes/Establecimientos/alta-establecimientos/alta-establecimientos.component';
import { EditarEstablecimientosComponent } from './componentes/Establecimientos/editar-establecimientos/editar-establecimientos.component';
import { Error404Component } from './componentes/Globales/error404/error404.component';
import { CargarIncidenteComponent } from './componentes/Incidentes/cargar-incidente/cargar-incidente.component';
import { ListarIncidentesComponent } from './componentes/Incidentes/listar-incidentes/listar-incidentes.component';
import { IncidenteComponent } from './componentes/Incidentes/incidente/incidente.component';
import { EstablecimientoComponent } from './componentes/Establecimientos/establecimiento/establecimiento.component';
import { ContactoComponent } from './componentes/Globales/contacto/contacto.component';
import { SobreNosotrosComponent } from './componentes/Globales/nosotros/sobre-nosotros.component';
import { UsuarioComponent } from './componentes/Usuarios/usuario/usuario.component';
import { SectorComponent } from './componentes/Sectores/sector/sector.component';
import { EquipoComponent } from './componentes/Equipos/equipo/equipo.component';
import { AltaSectorComponent } from './componentes/Sectores/alta-sector/alta-sector.component';
import { TokenGuard } from './guards/token.guard';
import { VistaTecnicoComponent } from './componentes/vistas/vista-tecnico/vista-tecnico.component';
import { EditarIncidentesComponent } from './componentes/Incidentes/editar-incidentes/editar-incidentes.component';
import { AltaEquiposComponent } from './componentes/Equipos/alta-equipos/alta-equipos.component';
import { EditarEquiposComponent } from './componentes/Equipos/editar-equipos/editar-equipos.component';
import { GestionComponent } from './componentes/vistas/gestion/gestion.component';
import { EditarSectorComponent } from './componentes/Sectores/editar-sector/editar-sector.component';
import { PuestoComponent } from './componentes/Puestos/puesto/puesto.component';
import { EditarPuestoComponent } from './componentes/puestos/editar-puesto/editar-puesto.component';
import { VistaGerencialComponent } from './componentes/vistas/vista-gerencial/vista-gerencial.component';
import { AltaPuestoComponent } from './componentes/puestos/alta-puesto/alta-puesto.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: SobreNosotrosComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },

  { path: 'alta-usuario', component: AltaUsuariosComponent, canActivate: [TokenGuard] },
  { path: 'listar-usuarios', component: ListarUsuariosComponent, canActivate: [TokenGuard] },
  { path: 'editar-usuario/:id', component: EditarUsuariosComponent, canActivate: [TokenGuard] },
  { path: 'usuario/:idUsuario', component: UsuarioComponent, canActivate: [TokenGuard] },

  { path: 'alta-establecimiento', component: AltaEstablecimientosComponent, canActivate: [TokenGuard] },
  { path: 'listar-establecimientos', component: ListarEstablecimientosComponent, canActivate: [TokenGuard] },
  { path: 'editar-establecimiento/:idEstablecimiento', component: EditarEstablecimientosComponent, canActivate: [TokenGuard] },
  { path: 'establecimiento/:idEstablecimiento', component: EstablecimientoComponent, canActivate: [TokenGuard] },

  { path: 'alta-sector', component: AltaSectorComponent, canActivate: [TokenGuard] },
  { path: 'alta-sector/:idEstablecimiento', component: AltaSectorComponent, canActivate: [TokenGuard] },
  { path: 'editar-sector/:idSector', component: EditarSectorComponent, canActivate: [TokenGuard] },
  { path: 'sector/:idSector', component: SectorComponent, canActivate: [TokenGuard] },

  { path: 'puesto/:idPuesto', component: PuestoComponent, canActivate: [TokenGuard] }, 


  { path: 'alta-equipo', component: AltaEquiposComponent, canActivate: [TokenGuard] },
  { path: 'alta-equipo/:idPuesto', component: AltaEquiposComponent, canActivate: [TokenGuard] },

  { path: 'editar-equipo/:idEquipo', component: EditarEquiposComponent, canActivate: [TokenGuard] },
  { path: 'equipo/:idEquipo', component: EquipoComponent, canActivate: [TokenGuard] },


  { path: 'alta-puesto', component: AltaPuestoComponent, canActivate: [TokenGuard] },
  { path: 'alta-puesto/:idEstablecimiento', component: AltaPuestoComponent, canActivate: [TokenGuard] },
  { path: 'editar-puesto/:idPuesto', component: EditarPuestoComponent, canActivate: [TokenGuard] },



  { path: 'cargar-incidente', component: CargarIncidenteComponent, canActivate: [TokenGuard] },
  { path: 'editar-incidente/:idIncidente', component: EditarIncidentesComponent, canActivate: [TokenGuard] },
  { path: 'listar-incidentes', component: ListarIncidentesComponent, canActivate: [TokenGuard] },

  { path: 'listar-incidentes/:idEstablecimiento', component: ListarIncidentesComponent, canActivate: [TokenGuard] },
  { path: 'incidente/:idIncidente', component: IncidenteComponent, canActivate: [TokenGuard] },

  { path: 'vista-tecnico/:idUsuario', component: VistaTecnicoComponent, canActivate: [TokenGuard] },
  { path: 'gestion', component: GestionComponent, canActivate: [TokenGuard] },

    { path: 'vista-gerencial/:idUsuario', component: VistaGerencialComponent, canActivate: [TokenGuard] },



  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }