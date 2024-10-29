import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Examen } from '../models/examen';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject = new BehaviorSubject<any>('null');

  public sendMessage(curso: Curso): void {
    this.subject.next({curso: curso});
  }

  public sendMessageExamen(examen: Examen): void {
    this.subject.next({examen: examen});
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
