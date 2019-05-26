import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultaCep(cep: string) {
    // Remover todo caractere nao numerico
    cep = cep.replace(/\D/g, '');

    if (cep != null) {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        return this.httpClient.get(`//viacep.com.br/ws/${cep}/json/`);
      }
    }

    return of({});
  }
}
