import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})

export class CursosFormComponent implements OnInit {
  nombre!: string;
  createAt!: Date;

  titulo = "Nuevo Curso";

  curso: Curso = new Curso(this.nombre, this.createAt);

constructor(public datepipe: DatePipe, private service: CursoService, private router: Router){
  this.createAt=new Date();
  let latest_date =this.datepipe.transform(this.createAt, 'yyyy-MM-dd');

}


myFunction(){
  this.createAt=new Date();
  let latest_date =this.datepipe.transform(this.createAt, 'yyyy-MM-dd');
 }


ngOnInit(){}

public crear(): void {
  this.service.crear(this.curso).subscribe(curso =>{
    console.log(curso);
    alert(`Curso creado con éxito`);
    this.router.navigate(['/cursos']);

  });
}

}
