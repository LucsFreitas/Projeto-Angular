import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresService } from '../shared/services/professores.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ProfessoresService
  ]
})
export class ListaProfessoresModule { }
