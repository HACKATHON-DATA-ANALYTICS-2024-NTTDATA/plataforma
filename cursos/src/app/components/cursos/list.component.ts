import { CursoService } from 'src/app/services/curso.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private toast: ToastrService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.list().subscribe(
      data => {
        this.cursos = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }




  onDelete(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot undo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.cursoService.delete(id).subscribe(
          data => {
            this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
            this.getCursos();
          },
          err => {
            this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'canceled',
          'product not deleted',
          'error'
        )
      }
    });
  }

  setCurso(curso: Curso): void {
    this.storageService.setCurso(curso);
    this.router.navigate(['/update']);
  }












}
