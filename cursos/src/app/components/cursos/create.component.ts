import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nombre!: string;
  createAt!: Date;

  constructor(
    private cursoService: CursoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const curso = new Curso(this.nombre, this.createAt);
    this.cursoService.create(curso).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

}
