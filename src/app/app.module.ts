import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProfessoresModule } from './lista-professores/lista-professores.module';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { MatTableModule, MatGridListModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { DetalhesProfessorComponent } from './lista-professores/detalhes-professor/detalhes-professor.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaProfessoresComponent,
    DetalhesProfessorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListaProfessoresModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
