import {
  Routes
} from '@angular/router';

import {
  LoginComponent
} from './pages/login/login';

import {
  CadastroComponent
} from './pages/cadastro/cadastro';

import {
  LayoutComponent
} from './components/layout/layout';

import {
  DashboardComponent
} from './pages/dashboard/dashboard';

import {
  ProfissionaisComponent
} from './pages/profissionais/profissionais';

import {
  AgendaComponent
} from './pages/agenda/agenda';

import {
  NovoAgendamentoComponent
} from './pages/novo-agendamento/novo-agendamento';

import {
  PerfilComponent
} from './pages/perfil/perfil';

import {
  authGuard
} from './guards/auth.guard';

export const appRoutes:
Routes = [

  {

    path:'',
    component:LoginComponent

  },

  {

    path:'cadastro',
    component:CadastroComponent

  },

  {

    path:'',

    component:LayoutComponent,

    canActivate:[
      authGuard
    ],

    children:[

      {

        path:'dashboard',
        component:DashboardComponent

      },

      {

        path:'profissionais',
        component:ProfissionaisComponent

      },

      {

        path:'agenda',
        component:AgendaComponent

      },

      {

        path:'novo-agendamento',
        component:NovoAgendamentoComponent

      },

      {

        path:'perfil',
        component:PerfilComponent

      }

    ]

  }

];