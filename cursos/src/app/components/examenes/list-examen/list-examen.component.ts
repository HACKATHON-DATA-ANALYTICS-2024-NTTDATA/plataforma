import { ExamenService } from 'src/app/services/examen.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Examen } from 'src/app/models/examen';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/services/storage.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-list-examen',
  templateUrl: './list-examen.component.html',
  styleUrls: ['./list-examen.component.css']
})
export class ListExamenComponent implements OnInit {

  examenes: Examen[] = [];

  constructor(
    private examenService: ExamenService,
    private toast: ToastrService,
    private storageService: StorageService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getExamenes();
  }

  getExamenes(): void {
    this.examenService.list().subscribe(
      data => {
        this.examenes = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }




  onDeleteExamen(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot undo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.examenService.delete(id).subscribe(
          data => {
            this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
            this.getExamenes();
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

  setExamen(examen: Examen): void {
    this.storageService.setExamen(examen);
    this.router.navigate(['/updateexamen']);
  }
  sendMessageExamen(examen: Examen): void {
    this.messageService.sendMessageExamen(examen);
    this.router.navigate(['/updateexamen']);
  }

}
