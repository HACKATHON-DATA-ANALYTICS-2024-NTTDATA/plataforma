import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {
  titulo ='Listado de Examen';
  examenes: Examen[];
  constructor(private service: ExamenService){

  }
  ngOnInit(){
    this.service.list().subscribe(examenes =>{
      this.examenes = examenes;
    });
  }

public eliminar(examen: Examen): void{

  if(confirm(' ¿Seguro que desea elminar a '+examen.nombre +'?')){
    this.service.delete(examen.id).subscribe(() => {
      this.examenes = this.examenes.filter(a => a !== examen)
      alert('examen '+examen.nombre+ ' eliminado con exito');
    })
  }
};

}
