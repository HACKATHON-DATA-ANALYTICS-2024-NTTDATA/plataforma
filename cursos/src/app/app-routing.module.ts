import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { UpdateComponent } from './components/cursos/update.component';
import { CreateComponent } from './components/cursos/create.component';
import { DetailComponent } from './components/cursos/detail.component';
import { ListComponent } from './components/cursos/list.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { CursosFormComponent } from './components/cursos/cursos-form.component';
import { UpdateExamenComponent } from './components/examenes/update-examen/update-examen.component';
import { CreateExamenComponent } from './components/examenes/create-examen/create-examen.component';
import { DetailExamenComponent } from './components/examenes/detail-examen/detail-examen.component';
import { ListExamenComponent } from './components/examenes/list-examen/list-examen.component';





const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Cursos'},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'alumnos/form', component: AlumnosFormComponent},
  {path: 'alumnos/form/:id', component: AlumnosFormComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/form', component: CursosFormComponent},
  {path: 'cursos/form/:id', component: CursosFormComponent},
  {path: 'listcursos', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'create', component: CreateComponent},
  //{path: 'update/:id/:nombre/:createAt', component: UpdateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'examenes', component: ExamenesComponent},
  {path: 'listexamenes', component: ListExamenComponent},
  {path: 'detailexamen/:id', component: DetailExamenComponent},
  {path: 'createexamen', component: CreateExamenComponent},
  {path: 'updateexamen', component: UpdateExamenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
