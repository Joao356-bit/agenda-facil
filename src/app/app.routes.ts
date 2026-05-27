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
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
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
        component: DashboardComponent,
        canActivate: [authGuard]
      },

      {
        path: 'profissionais',
        component: ProfissionaisComponent,
        canActivate: [authGuard]
      },

      {
        path: 'agenda',
        component: AgendaComponent,
        canActivate: [authGuard]
      },

      {
        path: 'novo-agendamento',
        component: NovoAgendamentoComponent,
        canActivate: [authGuard]
      },

      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [authGuard]
      }

    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  }

];