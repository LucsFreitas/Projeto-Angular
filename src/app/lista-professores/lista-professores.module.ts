import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresService } from '../shared/services/professores.service';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [
    ProfessoresService
  ]
})
export class ListaProfessoresModule { }
