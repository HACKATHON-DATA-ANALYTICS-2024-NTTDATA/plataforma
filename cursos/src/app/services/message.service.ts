import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject = new BehaviorSubject<any>('null');

  public sendMessage(curso: Curso): void {
    this.subject.next({curso: curso});
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
