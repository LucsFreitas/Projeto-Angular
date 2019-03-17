import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../shared/professores.service';
import { Professor } from '../shared/professor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  professores: Professor[];
  displayedColumns: string[] = ['matricula', 'nome', 'email'];
  urlUnicap2015 = 'http://www.unicap.br/ppgd/wp-content/uploads/2016/12/marca_2025_altaresol.png';

  constructor(
    private professoresService: ProfessoresService,
    private router: Router
  ) { }

  ngOnInit() {
    this.professores = this.professoresService.getListaProfessores();
  }

  onClick(id) {
    this.router.navigate(['professor/:id/disciplinas', { queryParams: { id }}]);
  }
}
