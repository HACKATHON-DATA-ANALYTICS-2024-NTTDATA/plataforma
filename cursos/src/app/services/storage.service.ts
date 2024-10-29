import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Examen } from '../models/examen';

const KEY_PROD = 'prod_update';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setCurso(curso: Curso): void {
    localStorage.setItem(KEY_PROD, JSON.stringify(curso));
  }

  public getCurso(): Curso {
    return JSON.parse(localStorage.getItem(KEY_PROD)!);
  }

  public setExamen(examen: Examen): void {
    localStorage.setItem(KEY_PROD, JSON.stringify(examen));
  }

  public getExamen(): Examen {
    return JSON.parse(localStorage.getItem(KEY_PROD)!);
  }

  public clear(): void {
    localStorage.removeItem(KEY_PROD);
  }
}
