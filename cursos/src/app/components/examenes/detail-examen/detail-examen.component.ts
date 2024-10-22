import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/models/examen';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamenService } from 'src/app/services/examen.service';



@Component({
  selector: 'app-detail-examen',
  templateUrl: './detail-examen.component.html',
  styleUrls: ['./detail-examen.component.css']
})
export class DetailExamenComponent implements OnInit {

examen: Examen | undefined;

constructor(
  private examenService: ExamenService,
  private toast: ToastrService,
  private router: Router,
  private activatedRoute: ActivatedRoute
) { }

ngOnInit(): void {
  this.getExamen();
}


getExamen(): void {
  this.activatedRoute.paramMap.subscribe(params => {
     const id = params.get('id');
     this.examenService.detail(id).subscribe(
       data => {
         this.examen = data;
         console.log(this.examen);
       },
       err => {
         this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
         this.router.navigate(['']);
       }
     );
   });
 }


}
