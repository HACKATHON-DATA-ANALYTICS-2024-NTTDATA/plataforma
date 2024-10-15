import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

 // cursoURL = environment.apiResrURL + '/api/cursos';

  private baseEndpoint = 'http://localhost:8090/api/cursos';
  private cabeceras: HttpHeaders = new HttpHeaders({'ContentType': 'application/json'});

  constructor(private http: HttpClient) { }

  public  listar (): Observable<Curso[]>{
   return this.http.get<Curso[]>(this.baseEndpoint+"/all");
  }

  public listarpaguinas(page: string, size: string): Observable<any>{
    const params =new HttpParams()
    .set('page', page)
    .set('size', size);
return this.http.get<any>(`${this.baseEndpoint}/all`,{params: params});
  }

  public ver(id: string): Observable<Curso>{
  // return this.http.get<Curso>(`${this.baseEndpoint}/id/${id}`);
  return this.http.get<Curso>(this.baseEndpoint + '/id'+`/${id}`);
  }
  public  crear(curso:Curso): Observable<Curso>{
 //   return this.http.post<Curso>(`${this.baseEndpoint}/create-cursos`, curso, {headers: this.cabeceras});
    return this.http.post<Curso>(`${this.baseEndpoint}/create-cursos`, curso);
  }
 public editar(id: string,curso:Curso): Observable<Curso>{
  return this.http.put<any>(this.baseEndpoint + `/update-cursos`+`/${id}`, curso);
 }
  public eliminar(id: string): Observable<void>{
  return this.http.delete<void>(`${this.baseEndpoint}/delete-cursos/${id}`);
  }
  public list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.baseEndpoint}/all`);
  }

  public detail(id: string): Observable<Curso> {
    return this.http.get<Curso>(this.baseEndpoint + '/id'+`/${id}`);
  }

  public create(curso: Curso): Observable<any> {
    return this.http.post<any>(`${this.baseEndpoint}/create-cursos`, curso);
  }

  public update(id: string, curso: Curso): Observable<any> {
    return this.http.put<any>(this.baseEndpoint + `/update-cursos`+`/${id}`, curso);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(this.baseEndpoint + `/delete-cursos`+`/${id}`);
}

}
