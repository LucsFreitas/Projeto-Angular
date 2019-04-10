import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../shared/services/professores.service';
import { Professor } from '../shared/model/professor';

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
  ) { }

  ngOnInit() {
    this.professoresService.getListaProfessores()
      .subscribe( response => this.professores = response );
  }
}
