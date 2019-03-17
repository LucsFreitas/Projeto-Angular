import { Injectable } from '@angular/core';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor() { }

  getListaProfessores(): Professor[] {
    return [{
      matricula: '1',
      nome: 'Fernando Wanderley',
      email: 'fernando@unicap.br'
    },
    {
      matricula: '2',
      nome: 'Fernando Bertino',
      email: 'fernando.bertino@unicap.br'
    },
    {
      matricula: '3',
      nome: 'Sérgio Murilo',
      email: 'sergio.murilo@unicap.br'
    },
    {
      matricula: '4',
      nome: 'Antônio Cavalcanti',
      email: 'tj@unicap.br'
    },
    {
      matricula: '5',
      nome: 'Giba',
      email: 'giba@unicap.br'
    },
  ];
  }
}
