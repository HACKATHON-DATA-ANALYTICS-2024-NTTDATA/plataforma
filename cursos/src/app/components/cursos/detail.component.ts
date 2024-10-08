import { Curso } from 'src/app/models/curso';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  curso: Curso | undefined;

  constructor(
    private cursoService: CursoService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }




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

}
