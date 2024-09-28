import { Curso } from 'src/app/models/curso';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: string;
  curso!: Curso;
  nombre!: string;
  createAt!: Date;

  constructor(
    private cursoService: CursoService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  onUpdate(): void {
    const cursox = new Curso(this.nombre, this.createAt);

    this.cursoService.update(this.id, cursox).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

/*

  getCurso(): void {
    this.activatedRoute.paramMap.subscribe(params => {
       const id = params.get('id');
       this.cursoService.detail(id).subscribe(
         data => {
           this.curso = data;
           console.log(this.curso);
         },
         err => {
           this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
           this.router.navigate(['']);
         }
       );
     });
   }

*/
getCurso(): void {
  this.id = this.activatedRoute.snapshot.params['id'];
  this.nombre = this.activatedRoute.snapshot.params['nombre'];
  this.createAt = this.activatedRoute.snapshot.params['createAt'];
}

}
