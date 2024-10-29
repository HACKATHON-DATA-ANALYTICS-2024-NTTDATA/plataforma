import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/models/examen';
import { ExamenService } from 'src/app/services/examen.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.css']
})
export class ExamenFormComponent implements OnInit {
  nombre!: string;
  createAt!: Date;
  id!: string;
  titulo = "Nuevo Examen";

  examen: Examen = new Examen(this.nombre, this.createAt);

  error: any;

constructor(
  public datepipe: DatePipe, private service: ExamenService,
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
      this.service.detail(id).subscribe(examen => this.examen = this.examen)
    }

  })
}

public crear(): void {
  this.service.create(this.examen).subscribe(examen =>{
    console.log(examen);
    alert(`Examen creado con éxito`);
    this.router.navigate(['/examenes']);

  }, err => {
    if(err.status === 400){
      this.error = err.error;
      console.log(this.error);
    }
  });
}

public editar(): void {
 const examenx = new Examen(this.nombre, this.createAt);
  this.service.update(this.id,examenx).subscribe(examen =>{
    console.log(examenx);
    alert(`Examen actualizado con éxito`);
    this.router.navigate(['/examenes']);

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
