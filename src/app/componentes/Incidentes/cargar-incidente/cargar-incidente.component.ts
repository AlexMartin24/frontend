import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria.model';
import { Equipo } from 'src/app/model/equipo.model';
import { Establecimiento } from 'src/app/model/establecimientos.model';
import { Incidente } from 'src/app/model/incidente.model';
import { Prioridad } from 'src/app/model/prioridad.model';
import { Sector } from 'src/app/model/sector.model';
import { Usuario } from 'src/app/model/usuario.model';
import { EstablecimientosService } from 'src/app/servicios/establecimientos/establecimientos.service';
import { CategoriaService } from 'src/app/servicios/incidentes/categoria.service';
import { IncidentesService } from 'src/app/servicios/incidentes/incidentes.service';
import { PrioridadService } from 'src/app/servicios/incidentes/prioridad.service';
import { SectoresService } from 'src/app/servicios/sectores/sectores.service';
import { UsuarioService } from 'src/app/servicios/usuarios/usuario.service';

@Component({
  selector: 'app-cargar-incidente',
  templateUrl: './cargar-incidente.component.html',
  styleUrls: ['./cargar-incidente.component.css']
})
export class CargarIncidenteComponent implements OnInit {
  incidenteForm!: FormGroup;
  establecimientos!: Establecimiento[];
  sectores!: Sector[];
  prioridades!: Prioridad[];
  categorias!: Categoria[];
  usuarios!: Usuario[];
  equipos!: Equipo[];
  keywordEstablecimiento = 'nombreEstablecimiento';
  keywordSector = 'nombreSector';
  keywordUsuario = 'usuario';
  filteredEstablecimientos: Establecimiento[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private incidenteService: IncidentesService,
    private router: Router,
    private establecimientosService: EstablecimientosService,
    private sectoresService: SectoresService,
    private prioridadService: PrioridadService,
    private categoriaService: CategoriaService,
    private usuariosService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchData();
  }

  initializeForm(): void {
    this.incidenteForm = this.formBuilder.group({
      establecimiento: ['', Validators.required],
      sector: ['', Validators.required],
      idPrioridad: ['', Validators.required],
      idCategoria: ['', Validators.required],
      tarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      usuario: ['', Validators.required],
      equipos: ['', Validators.required]
    });
  }

  fetchData(): void {
    this.establecimientosService.obtenerEstablecimientos().subscribe((data: Establecimiento[]) => {
      this.establecimientos = data;
    });

    this.prioridadService.obtenerPrioridades().subscribe((data: Prioridad[]) => {
      this.prioridades = data;
    });

    this.categoriaService.obtenerCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });

    this.usuariosService.obtenerUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  filterEstablecimientos(event: any): void {
    const keyword = event.target.value;
    if (keyword.trim() === '') {
      this.filteredEstablecimientos = [];
    } else {
      this.filteredEstablecimientos = this.establecimientos.filter(
        (establecimiento) => establecimiento.nombre.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }

  selectEstablecimiento(establecimiento: Establecimiento): void {
    this.incidenteForm.get('establecimiento')?.setValue(establecimiento.nombre);
    this.filteredEstablecimientos = [];

    // Here, you can add the logic to fetch sectors based on the selected establishment
    this.sectoresService.obtenerSectoresPorEstablecimiento(establecimiento.idEstablecimiento).subscribe((data: Sector[]) => {
      this.sectores = data;
      this.incidenteForm.get('sector')?.enable();
      this.incidenteForm.get('sector')?.setValue(''); // Reset selected sector when changing establecimiento
    });
  }


  

  onSubmit(): void {
    if (this.incidenteForm.invalid) {
      return;
    }

    const incidente: Incidente = this.incidenteForm.value;
    this.incidenteService.cargarIncidente(incidente).subscribe(
      () => {
        console.log('Incidente agregado exitosamente');
        this.router.navigate(['/listar-incidentes']);
      },
      (error: any) => {
        console.log(`Error al agregar el incidente: ${error.message}`);
      }
    );
  }
}
