import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
private baseEndpoint = 'http://localhost:8090/api/preguntas';
  private cabeceras: HttpHeaders = new HttpHeaders({'ContentType': 'application/json'});

  constructor(private http: HttpClient) { }

  public list(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`${this.baseEndpoint}/all`);
  }

  public detail(id: string): Observable<Pregunta> {
    return this.http.get<Pregunta>(this.baseEndpoint + '/id'+`/${id}`);
  }

  public create(examen: Pregunta): Observable<any> {
    return this.http.post<any>(`${this.baseEndpoint}/create-preguntas`, examen);
  }

  public update(id: string, examen: Pregunta): Observable<any> {
    return this.http.put<any>(this.baseEndpoint + `/update-preguntas`+`/${id}`, examen);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(this.baseEndpoint + `/delete-preguntas`+`/${id}`);
}

}
