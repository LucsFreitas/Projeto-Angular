import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../model/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  apiUrl = 'https://aw-controle-disciplinas-api.herokuapp.com/disciplina';

  constructor( private http: HttpClient ) { }

  getListaDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }
}
