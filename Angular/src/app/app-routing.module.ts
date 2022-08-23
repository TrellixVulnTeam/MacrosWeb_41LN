import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  }, {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canLoad: [IsLoggedGuard],
    canActivate: [AuthGuard]
  }, {
    path: 'configuracion-proyectos',
    loadChildren: () => import('./pages/project-settings/project-settings.module').then(m => m.ProjectSettingsModule),
    // canLoad: [IsLoggedGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'tablas',
    children: [
      {
        path: 'legalizacion',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'promesas',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'subsidios',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'segumientos-subsidio',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'entregas',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'desembolsos',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      }, {
        path: 'recaudos',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      }, {
        path: 'trazabilidad',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      }, {
        path: 'ordenes',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      }, {
        path: 'renovaciones',
        loadChildren: () => import('./pages/tables/legalizacion/table.module').then(m => m.TableModule),
        canActivate: [AuthGuard]
      }, {
        path: 'escrituracion',
        loadChildren: () => import('./pages/tables/legalizacion/legalizacion.module').then(m => m.LegalizacionModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'reporte/:id',
    loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule),
    // canLoad: [IsLoggedGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'configuracion-roles',
    loadChildren: () => import('./pages/user-roles/user-roles.module').then(m => m.UserRolesModule),
    // canLoad: [IsLoggedGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'carga-informacion',
    loadChildren: () => import('./pages/data-load/data-load.module').then(m => m.DataLoadModule),
    // canLoad: [IsLoggedGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'auditoria',
    loadChildren: () => import('./pages/audit/audit.module').then(m => m.AuditModule),
    // canLoad: [IsLoggedGuard],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
