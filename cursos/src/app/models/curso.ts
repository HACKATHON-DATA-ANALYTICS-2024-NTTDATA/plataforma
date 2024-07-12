import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class Curso {
  id: string;
  nombre: string;
  createAt: Date;
  alumnos: Alumno[] = [];
  examenes: Examen[] = [];

  constructor(nombre: string, createAt: Date) {
    this.nombre = nombre;
    this.createAt = createAt;
}


}
