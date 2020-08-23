import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';
import { RegisterComponent } from './components/register/register.component';
import { LoadsComponent } from './components/loads/loads.component';

const routes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'load', component: LoadsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'patients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
