import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosFormComponent } from './components/cursos/cursos-form.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { LayoutModule } from './layout/layout.module';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { FormsModule } from '@angular/forms';


//components Cursos
import { ListComponent } from './components/cursos/list.component';
import { DetailComponent } from './components/cursos/detail.component';
import { CreateComponent } from './components/cursos/create.component';
import { UpdateComponent } from './components/cursos/update.component';


//components Examenes
import { UpdateExamenComponent } from './components/examenes/update-examen/update-examen.component';
import { CreateExamenComponent } from './components/examenes/create-examen/create-examen.component';
import { DetailExamenComponent } from './components/examenes/detail-examen/detail-examen.component';
import { ListExamenComponent } from './components/examenes/list-examen/list-examen.component';






// external
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    CursosComponent,
    ExamenesComponent,
    AlumnosFormComponent,
    CursosFormComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    UpdateExamenComponent,
    CreateExamenComponent,
    DetailExamenComponent,
    ListExamenComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
 // providers: [],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
