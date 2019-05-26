import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProfessoresModule } from './lista-professores/lista-professores.module';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { MatTableModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { DetalhesProfessorComponent } from './lista-professores/detalhes-professor/detalhes-professor.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaProfessoresComponent,
    DetalhesProfessorComponent,
    CadastroProfessorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListaProfessoresModule,
    HttpClientModule,
    MaterialModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
