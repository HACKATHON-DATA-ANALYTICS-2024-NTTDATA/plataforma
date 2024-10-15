import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseEndpoint = 'http://localhost:8090/api/alumno';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public  listar(): Observable<Alumno[]>{
   return this.http.get<Alumno[]>(this.baseEndpoint+"/all");
  }

  /*public listarpaginas(page: string, size: string): Observable<any>{
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`,{params: params});
  }*/

  public ver (id: string): Observable<Alumno>{
   return this.http.get<Alumno>(`${this.baseEndpoint}/id/${id}`);
  }

  public crear(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.baseEndpoint + '/create-student', alumno, { headers: this.cabeceras });
  }

 public editar (alumno:Alumno): Observable<Alumno>{
  return this.http.put<Alumno>(`${this.baseEndpoint}/update-student/${alumno.id}`,alumno,{headers: this.cabeceras});
 }
public eliminar (id: string): Observable<void>{
  return this.http.delete<void>(`${this.baseEndpoint}/delete-personal-asset/${id}`);
}
}
