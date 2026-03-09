import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasyncComponent } from './datasync.component';
import { DatasyncRoutingModule } from './datasync-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatasyncComponent],
  imports: [
    CommonModule,
    DatasyncRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class DatasyncModule { }
