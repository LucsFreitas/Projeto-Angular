import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { DetalhesProfessorComponent } from './lista-professores/detalhes-professor/detalhes-professor.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';

const routes: Routes = [
  { path: '', component: ListaProfessoresComponent },
  { path: 'professor/:id', component: DetalhesProfessorComponent },
  { path: 'novo-professor', component: CadastroProfessorComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
