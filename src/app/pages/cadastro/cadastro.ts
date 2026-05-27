import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
<<<<<<< HEAD
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import { AuthService } from '../../services/auth';
=======
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { RouterLink } from '@angular/router';
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

@Component({
  selector: 'app-cadastro',
  standalone: true,
<<<<<<< HEAD
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})

export class CadastroComponent {

  cadastroForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) {

    this.cadastroForm = this.fb.group({

      nome: [
        '',
        [
          Validators.required
=======
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
<<<<<<< HEAD
      ]

    });

  }

  onSubmit(): void {

    if (this.cadastroForm.invalid) {

      this.cadastroForm.markAllAsTouched();
      return;

    }

    const {
      nome,
      email,
      senha
    } = this.cadastroForm.value;

    this.authService
      .register(
        nome,
        email,
        senha
      )
      .subscribe({

        next: () => {

          alert(
            'Usuário criado com sucesso'
          );

          this.router.navigate([
            '/login'
          ]);

        },

        error: (err: any) => {

          console.error(
            'Erro:',
            err
          );

          alert(

            err?.error?.message ||
            'Erro ao cadastrar'

          );

        }

      });

  }

=======
      ],

      confirmarSenha: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }
    console.log(this.cadastroForm.value);
  }
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
}