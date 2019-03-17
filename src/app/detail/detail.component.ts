import { Component, OnInit } from '@angular/core';
import { Professor } from '../shared/professor';
import { DisciplinasService } from '../shared/disciplinas.service';
import { Disciplina } from '../shared/disciplina';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  urlUnicap2015 = 'http://www.unicap.br/ppgd/wp-content/uploads/2016/12/marca_2025_altaresol.png';
  urlProfessor = 'https://pngimage.net/wp-content/uploads/2018/06/pessoa-icon-png-4.png';
  professor: Professor;
  disciplinas: Disciplina[];
  displayedColumns: string[] = ['codigo', 'descricao', 'qtdCreditos'];

  constructor(
    private disciplinaService: DisciplinasService
  ) {
    this.disciplinas = this.disciplinaService.getDisciplinasPorProfessor(1);
  }

  ngOnInit() {
    this.professor = {
      matricula: '51340-5',
      nome: 'Fernando Wanderley',
      email: 'fernando@unicap.br'
    };
  }

}
