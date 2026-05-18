import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-novo-agendamento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './novo-agendamento.html',
  styleUrls: ['./novo-agendamento.css']
})
export class NovoAgendamentoComponent {
  agendamentoForm: FormGroup;
  profissionais = [
    'Dr. João',
    'Dra. Ana',
    'Dr. Pedro'
  ];

  horarios = [
    '08:00',
    '09:00',
    '10:00',
    '14:00',
    '15:00',
    '16:00'
  ];

  constructor(private fb: FormBuilder) {
    this.agendamentoForm = this.fb.group({
      cliente: [
        '',
        Validators.required
      ],

      profissional: [
        '',
        Validators.required
      ],

      data: [
        '',
        Validators.required
      ],

      horario: [
        '',
        Validators.required
      ],

      observacoes: ['']
    });
  }

  onSubmit() {
    if (this.agendamentoForm.invalid) {
      this.agendamentoForm.markAllAsTouched();
      return;
    }

    console.log(
      this.agendamentoForm.value
    );
  }
}