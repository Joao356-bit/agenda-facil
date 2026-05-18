import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profissionais.html',
  styleUrls: ['./profissionais.css']
})
export class ProfissionaisComponent {
  modalAberto = false;
  mensagem = '';
  profissionalForm: FormGroup;
  profissionais = [
    {
      nome: 'Dr. João Silva',
      especialidade: 'Cardiologista',
      email: 'joao@email.com'
    },

    {
      nome: 'Dra. Ana Souza',
      especialidade: 'Pediatra',
      email: 'ana@email.com'
    },

    {
      nome: 'Dr. Pedro Lima',
      especialidade: 'Dermatologista',
      email: 'pedro@email.com'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.profissionalForm = this.fb.group({
      nome: [
        '',
        Validators.required
      ],

      especialidade: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.profissionalForm.reset();
  }

  adicionarProfissional() {
    if (this.profissionalForm.invalid) {
      this.profissionalForm.markAllAsTouched();
      return;
    }
    this.profissionais.push(
      this.profissionalForm.value
    );

    this.mensagem =
      'Profissional cadastrado com sucesso!';
    setTimeout(() => {
      this.mensagem = '';
    }, 3000);
    this.fecharModal();
  }

  excluirProfissional(index: number) {
    this.profissionais.splice(index, 1);

  }
}