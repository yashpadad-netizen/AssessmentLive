import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencywisequestionComponent } from './competencywisequestion.component';
import { CompetencywisequestionRoutingModule } from './competencywisequestion-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [CompetencywisequestionComponent],
  imports: [
    CommonModule,
    CompetencywisequestionRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class CompetencywisequestionModule { }
