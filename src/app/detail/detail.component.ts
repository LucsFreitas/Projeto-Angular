import { Component, OnInit } from '@angular/core';
import { Professor } from '../shared/model/professor';
import { DisciplinasService } from '../shared/services/disciplinas.service';
import { Disciplina } from '../shared/model/disciplina';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresService } from '../shared/services/professores.service';

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
  inscricao: Subscription;
  matricula: string;

  constructor(
    private disciplinaService: DisciplinasService,
    private professorService: ProfessoresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(params => {
      this.matricula = params.id;
    });

    this.professorService.getByMatricula(this.matricula)
      .subscribe( professor => {
        if (!professor) {
          this.router.navigate(['']);
        }
        this.professor = professor;
      });


    this.disciplinaService.getListaDisciplinas()
      .subscribe( disciplinas => this.disciplinas = disciplinas );
  }

  voltar() {
    this.router.navigate(['']);
  }
}
