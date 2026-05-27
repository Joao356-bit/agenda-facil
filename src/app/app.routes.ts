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
<<<<<<< HEAD
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
=======

export const routes: Routes = [
  {
    path: '',
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
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
<<<<<<< HEAD

    children: [

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
=======
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
      },

      {
        path: 'profissionais',
<<<<<<< HEAD
        component: ProfissionaisComponent,
        canActivate: [authGuard]
=======
        component: ProfissionaisComponent
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
      },

      {
        path: 'agenda',
<<<<<<< HEAD
        component: AgendaComponent,
        canActivate: [authGuard]
=======
        component: AgendaComponent
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
      },

      {
        path: 'novo-agendamento',
<<<<<<< HEAD
        component: NovoAgendamentoComponent,
        canActivate: [authGuard]
=======
        component: NovoAgendamentoComponent
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
      },

      {
        path: 'perfil',
<<<<<<< HEAD
        component: PerfilComponent,
        canActivate: [authGuard]
      }

    ]
=======
        component: PerfilComponent
      }
    ]

>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
  },

  {
    path: '**',
    component: NotFoundComponent
  }
<<<<<<< HEAD

=======
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
];