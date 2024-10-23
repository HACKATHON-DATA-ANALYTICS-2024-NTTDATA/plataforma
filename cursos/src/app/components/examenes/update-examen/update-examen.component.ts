import { Examen } from 'src/app/models/examen';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamenService } from 'src/app/services/examen.service';
import { StorageService } from 'src/app/services/storage.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update-examen',
  templateUrl: './update-examen.component.html',
  styleUrls: ['./update-examen.component.css']
})
export class UpdateExamenComponent implements OnInit {

   id!: string;
   examen!: Examen;
   nombre!: string;
   createAt!: Date;

   subscription: Subscription | undefined;


   constructor(
     private examenService: ExamenService,
     private toast: ToastrService,
     private router: Router,
    // private activatedRoute: ActivatedRoute,
     private storageService: StorageService,
     private messageService: MessageService
   ) { }

   ngOnInit(): void {
     this.getExamen();
   }

   onUpdate(): void {
     const examenx = new Examen();

  //   this.cursoService.update(this.id, cursox).subscribe(
   this.examenService.update(this.examen.id, this.examen).subscribe(
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
 getExamen(): void {
 //  this.id = this.activatedRoute.snapshot.params['id'];
  // this.nombre = this.activatedRoute.snapshot.params['nombre'];
  // this.createAt = this.activatedRoute.snapshot.params['createAt'];

 //this.curso = this.storageService.getCurso();
 //this.storageService.clear();


 this.subscription = this.messageService.getMessage().subscribe(
   data => {
     this.examen = data.examen;
     console.log(data.examen);

   },
   err => {
     console.log(err);
   }
 );

 }



 ngOnDestroy(): void {
   this.subscription?.unsubscribe();
 }


 }
