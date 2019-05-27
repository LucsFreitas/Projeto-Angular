import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor} from '../model/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  apiUrl = 'https://aw-controle-disciplinas-api.herokuapp.com/professor';

  constructor( private http: HttpClient ) { }

  getListaProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  getByMatricula(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.apiUrl}/${id}`);
  }

  salvar(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }
}
