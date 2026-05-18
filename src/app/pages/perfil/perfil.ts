import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {
  perfilForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nome: [
        'João Luiz',
        Validators.required
      ],

      email: [
        'joao@email.com',
        [
          Validators.required,
          Validators.email
        ]
      ],

      senhaAtual: [''],

      novaSenha: ['']
    });
  }

  salvarPerfil() {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }

    console.log(
      this.perfilForm.value
    );
  }
}