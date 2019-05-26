import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresService } from '../shared/services/professores.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProfessoresService,
    ConsultaCepService
  ]
})
export class CadastroProfessorModule { }
