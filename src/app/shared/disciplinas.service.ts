import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  disciplinas: Disciplina[];

  constructor() {
    this.disciplinas = this.inicializaDisciplinas();
  }

  inicializaDisciplinas() {
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
      {
        codigo: 'INF2004',
        descricao: 'Introdução a Programação',
        qtdCreditos: 4
      },
    ];
  }

  getDisciplinasPorProfessor(id: number): Disciplina[] {
    return this.disciplinas;
  }
}
