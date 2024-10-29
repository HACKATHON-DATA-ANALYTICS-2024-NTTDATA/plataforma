import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private baseEndpoint = 'http://localhost:8090/api/examenes';
  private cabeceras: HttpHeaders = new HttpHeaders({'ContentType': 'application/json'});

  constructor(private http: HttpClient) { }

  public list(): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${this.baseEndpoint}/all`);
  }

  public detail(id: string): Observable<Examen> {
    return this.http.get<Examen>(this.baseEndpoint + '/id'+`/${id}`);
  }

  public create(examen: Examen): Observable<any> {
    return this.http.post<any>(`${this.baseEndpoint}/create-examen`, examen);
  }

  public update(id: string, examen: Examen): Observable<any> {
    return this.http.put<any>(this.baseEndpoint + `/update-examen`+`/${id}`, examen);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(this.baseEndpoint + `/delete-examen`+`/${id}`);
}

}
