import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { CadastroComponent } from './pages/cadastro/cadastro';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProfissionaisComponent } from './pages/profissionais/profissionais';
import { AgendaComponent } from './pages/agenda/agenda';
import { PerfilComponent } from './pages/perfil/perfil';
import { NovoAgendamentoComponent } from './pages/novo-agendamento/novo-agendamento';
import { NotFoundComponent } from './pages/not-found/not-found';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha';

import { LayoutComponent } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'esqueci-senha',
    component: EsqueciSenhaComponent
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'profissionais',
        component: ProfissionaisComponent
      },

      {
        path: 'agenda',
        component: AgendaComponent
      },

      {
        path: 'novo-agendamento',
        component: NovoAgendamentoComponent
      },

      {
        path: 'perfil',
        component: PerfilComponent
      }
    ]

  },

  {
    path: '**',
    component: NotFoundComponent
  }
];