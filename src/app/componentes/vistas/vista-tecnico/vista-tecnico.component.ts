import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuarios/usuario.service';
import { IncidentesService } from 'src/app/servicios/incidentes/incidentes.service';
import { Incidente } from 'src/app/model/incidente.model';
import { incidenteAgenda } from 'src/app/model/incidente_agenda.model';
import { Observable, forkJoin } from 'rxjs';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-vista-tecnico',
  templateUrl: './vista-tecnico.component.html',
  styleUrls: ['./vista-tecnico.component.css']
})
export class VistaTecnicoComponent {
  usuario!: Usuario; 
  incidentes: Incidente[] = [];
  agenda!: incidenteAgenda; 
  estadoLoading!: Observable<boolean>;
  estadoLoading2: any = false;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private incidentesService: IncidentesService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.estadoLoading = this.loadingService.getEstado();
      
      const idUsuario = params.get('idUsuario');
      if (idUsuario) {
        this.obtenerDetallesUsuario(Number(idUsuario));

      } else {
        console.log("***** NO SE ENCONTRÓ EL USUARIO *****");
      }
    });
    
  }

  getEstado() {
    return this.loadingService.getEstado();
  }


  private obtenerDetallesUsuario(idUsuario: number) {
    this.usuarioService.obtenerUsuarioPorId(idUsuario).subscribe(
      (data: Usuario) => {
        console.log("Usuario Recuperado", data);
        if (data) {
          this.usuario = data;
          this.obtenerIncidentesYAgendas(idUsuario);
        }
      },
      error => {
        console.log('Error al obtener los detalles del usuario:', error);
      }
    );
  }

  private obtenerIncidentesYAgendas(idUsuario: number) {
    this.loadingService.show();
    
    this.incidentesService.obtenerIncidentesPorUsuario(idUsuario).subscribe(
      (listaIncidentes: Incidente[]) => {
        this.incidentes = listaIncidentes;
        console.log('Incidentes por usuario:', this.incidentes);

        const incidenteAgendaObservables = this.incidentes.map(incidente =>
          this.incidentesService.obtenerHorarioDeUnIncidente(incidente.idIncidente)
        );

        forkJoin(incidenteAgendaObservables).subscribe(
          agendas => {
            this.incidentes.forEach((incidente, index) => {
              incidente.agenda = agendas[index];
              console.log('Agenda para incidente:', incidente.agenda);
            });
            this.loadingService.hide();
          },
          error => {
            console.log('Error al obtener la agenda del incidente:', error);
            this.loadingService.hide();
          }
        );
      },
      error => {
        console.log('Error al obtener los incidentes por usuario:', error);
        this.loadingService.hide();
      }
    );
  }
}
