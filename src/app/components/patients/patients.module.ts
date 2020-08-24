import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    NgbModule,
    PatientsRoutingModule,
  ]
})
export class PatientsModule { }
