import { Observable, catchError, tap, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Incidente } from "src/app/model/incidente.model";
import { EstablecimientosService } from "../establecimientos/establecimientos.service";
import { Usuario } from "src/app/model/usuario.model";
import { comentarios_incidente } from "src/app/model/comentarios_incidente.model";
import { Equipo } from "src/app/model/equipo.model";
import { incidenteAgenda } from "src/app/model/incidente_agenda.model";

@Injectable({
  providedIn: 'root'
})
export class IncidentesService {
  private apiURL = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient,
  ) { }

  obtenerIncidentes(): Observable<Incidente[]> {
    const url = `${this.apiURL}/incidentes`;
    return this.http.get<Incidente[]>(url);
  }

  obtenerIncidentesPorEstablecimiento(idEstablecimiento: number): Observable<Incidente[]> {
    const url = `${this.apiURL}/incidentes/${idEstablecimiento}/establecimiento`;
    // console.log("Datos que llegan a incidenteService", Incidente);
    return this.http.get<Incidente[]>(url);
  }


  obtenerDetalleIncidentePorId(idIncidente: number): Observable<Incidente> {
    const url = `${this.apiURL}/incidentes/${idIncidente}`;
    return this.http.get<Incidente>(url);
  }

  obtenerEquiposDeUnIncidente(idIncidente: number): Observable<Equipo[]> {
    const url = `${this.apiURL}/incidentes/${idIncidente}/equipos`;
    return this.http.get<Equipo[]>(url); // Cambiar el tipo de respuesta a Equipo[]
  }

  obtenerUsuariosDeUnIncidente(idIncidente: number): Observable<Usuario[]> {
    const url = `${this.apiURL}/incidentes/${idIncidente}/usuarios`;
    return this.http.get<Usuario[]>(url);
  }


  obtenerIncidentesPorUsuario(idUsuario: number): Observable<Incidente[]> {
    const url = `${this.apiURL}/usuarios/${idUsuario}/incidentes`;
    return this.http.get<Incidente[]>(url);
  }

  obtenerHorarioDeUnIncidente(idIncidente: number): Observable<incidenteAgenda> {
    const url = `${this.apiURL}/incidentesAgenda/${idIncidente}`;
    return this.http.get<incidenteAgenda>(url);
  }
//   <td>
//   {{ incidente.agenda ? (incidente.agenda.horarioInicio + ' - ' + incidente.agenda.horarioFin) : 'N/A' }}
// </td>
       


  obtenerComentariosDeUnIncidente(idIncidente: number): Observable<comentarios_incidente[]> {
    const url = `${this.apiURL}/comentariosPorIncidente/${idIncidente}`;
    return this.http.get<comentarios_incidente[]>(url);
  }



  cargarIncidente(incidente: Incidente) {
    console.log('Datos del incidente:', incidente);
    return this.http.post(`${this.apiURL}/incidentes.php`, incidente).pipe(
      tap((data: any) => console.log(`incidente creado con ID ${data.idIncidente}`)),
      catchError(err => {
        console.log(`Error al crear incidente: ${err.message}`);
        return throwError(err);
      })
    );
  }

  crearIncidente(incidente: Incidente) {
    console.log('Datos del incidente:', incidente);
    return this.http.post(`${this.apiURL}/incidentes`, incidente).pipe(
      tap((data: any) => console.log(`incidente creado con ID ${data.idIncidente}`)),
      catchError(err => {
        console.log(`Error al crear incidente: ${err.message}`);
        return throwError(err);
      })
    );
  }




}
