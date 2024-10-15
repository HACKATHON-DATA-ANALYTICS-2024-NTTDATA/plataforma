import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!: string;
  titulo = "Nuevo Curso";

  curso: Curso = new Curso(this.nombre, this.createAt);

  error: any;

constructor(
  public datepipe: DatePipe, private service: CursoService,
   private router: Router, private route: ActivatedRoute){
  this.createAt=new Date();
  let latest_date =this.datepipe.transform(this.createAt, 'yyyy-MM-dd');

}


myFunction(){
  this.createAt=new Date();
  let latest_date =this.datepipe.transform(this.createAt, 'yyyy-MM-dd');
 }


ngOnInit(){
  this.getCurso();
  this.route.paramMap.subscribe(params => {
    const id: string = params.get('id');
    if(id){
      this.service.ver(id).subscribe(curso => this.curso = curso)
    }

  })
}

public crear(): void {
  this.service.crear(this.curso).subscribe(curso =>{
    console.log(curso);
    alert(`Curso creado con éxito`);
    this.router.navigate(['/cursos']);

  }, err => {
    if(err.status === 400){
      this.error = err.error;
      console.log(this.error);
    }
  });
}

public editar(): void {
  const cursox = new Curso(this.nombre, this.createAt);
  this.service.editar(this.curso.id,cursox).subscribe(curso =>{
    console.log(curso);
    alert(`Curso actualizado con éxito`);
    this.router.navigate(['/cursos']);

  }, err => {
    if(err.status === 400){
      this.error = err.error;
      console.log(this.error);
    }
  });
}


getCurso(): void {
   this.id = this.route.snapshot.params['id'];
   this.nombre = this.route.snapshot.params['nombre'];
   this.createAt = this.route.snapshot.params['createAt'];

  //this.curso = this.storageService.getCurso();
  //this.storageService.clear();
}
}
