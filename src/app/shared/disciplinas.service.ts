import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  constructor() { }

  getDisciplinasPorProfessor(id: number): Disciplina[] {
    return [
      {
        codigo: 'INF1904',
        descricao: 'Desenvolvimento WEB',
        qtdCreditos: 5
      },
      {
        codigo: 'INF3512',
        descricao: 'Programação Orientada a Objetos',
        qtdCreditos: 4
      },
      {
        codigo: 'INF2146',
        descricao: 'Programação Funcional',
        qtdCreditos: 4
      },
    ];
  }
}
