import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  titulo ='Listado de Alumnos';
  alumnos: Alumno[];
  constructor(private service: AlumnoService){

  }
  ngOnInit(){
    this.service.listar().subscribe(alumnos =>{
      this.alumnos = alumnos;
    });
  }

  public eliminar(alumno: Alumno): void{

    if(confirm(' ¿Seguro que desea elminar a '+ alumno.nombre +'?')){
      this.service.eliminar(alumno.id).subscribe(() => {
        this.alumnos = this.alumnos.filter(a => a !== alumno)
        alert('alumno '+ alumno.nombre+ ' eliminado con exito');
      })
    }
  };

}
