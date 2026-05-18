import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [],
  templateUrl: './agenda.html',
  styleUrls: ['./agenda.css']
})
export class AgendaComponent {
  diaSelecionado = '18 Maio 2026';
  horarios = [
    {
      hora: '08:00',
      cliente: 'João Silva',
      profissional: 'Dr. Pedro'
    },

    {
      hora: '10:00',
      cliente: 'Maria Souza',
      profissional: 'Dra. Ana'
    },

    {
      hora: '14:00',
      cliente: 'Carlos Mendes',
      profissional: 'Dr. João'
    }
  ];
}