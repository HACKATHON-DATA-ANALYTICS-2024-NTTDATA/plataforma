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

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Cursos'},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'alumnos/form', component: AlumnosFormComponent},
  {path: 'alumnos/form/id', component: AlumnosFormComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'listcursos', component: ListComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent},

  {path: 'examenes', component: ExamenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
