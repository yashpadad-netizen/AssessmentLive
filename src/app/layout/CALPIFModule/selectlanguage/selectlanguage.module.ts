import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectlanguageComponent } from './selectlanguage.component';
import { SelectlanguageRoutingModule } from './selectlanguage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectlanguageComponent],
  imports: [
    CommonModule,
    SelectlanguageRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class SelectlanguageModule { }
