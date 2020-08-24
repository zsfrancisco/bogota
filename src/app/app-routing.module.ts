import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'patients',
    loadChildren: () => import('./components/patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'load',
    loadChildren: () => import('./components/loads/loads.module').then(m => m.LoadsModule)
  },
  {
    path: '**',
    redirectTo: 'patients',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
