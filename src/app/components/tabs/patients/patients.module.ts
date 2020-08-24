import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { AngularMaterialModule } from '../../../angular-material-folder/angular-material/angular-material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from './customPaginatorConfiguration';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PatientsRoutingModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class PatientsModule { }
