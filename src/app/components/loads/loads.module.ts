import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadsRoutingModule } from './loads-routing.module';
import { LoadsComponent } from './loads.component';

@NgModule({
  declarations: [LoadsComponent],
  imports: [
    CommonModule,
    LoadsRoutingModule
  ]
})
export class LoadsModule { }
