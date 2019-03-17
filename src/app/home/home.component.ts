import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../shared/professores.service';
import { Professor } from '../shared/professor';

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
    private professoresService: ProfessoresService
  ) {
    this.professores = this.professoresService.getListaProfessores();
  }

  ngOnInit() {
  }

  clikTable(obj) {
    console.log(obj);
  }
}
