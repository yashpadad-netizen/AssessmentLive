import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HappinessregistrationformComponent } from './happinessregistrationform.component';
import { HappinessregistrationformRoutingModule } from './happinessregistrationform-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HappinessregistrationformComponent
  ],
  imports: [
    CommonModule, HappinessregistrationformRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class HappinessregistrationformModule { }
