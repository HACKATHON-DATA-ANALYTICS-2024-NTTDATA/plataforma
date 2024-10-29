import { Asignatura } from "./asignatura";
import { Pregunta } from "./pregunta";

export class Examen {
  id: string;
  nombre: string;
  createAt: Date;
  preguntas: Pregunta[] = [];
  asignatura: Asignatura;
  respondido: boolean;

  constructor(nombre: string, createAt: Date) {
    this.nombre = nombre;
    this.createAt = createAt;
}
}
