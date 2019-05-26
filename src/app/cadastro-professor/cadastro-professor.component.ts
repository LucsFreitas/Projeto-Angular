import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../shared/services/professores.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private professoresService: ProfessoresService,
    private consultaCepService: ConsultaCepService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      matricula: [null, Validators.required],
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      cep: [null, Validators.required],
      rua: null,
      numero: [null, Validators.required],
      bairro: null,
      cidade: null,
      estado: null,
    });
  }

  consultaCep() {
    const cep = this.form.get('cep').value;

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCep(cep).subscribe(
        dados => this.populaDadosForm(dados)
      );
    }
  }

  populaDadosForm(dados) {
    this.form.patchValue({
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    });
  }

  salvar() {
    this.professoresService.salvar(this.form.value)
      .subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          this.snackBar.open('Ocorreu um erro ao tentar salvar. Tente novamente.', 'ok', {
            duration: 4000,
          });
        }
      });
  }

}
