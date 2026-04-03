import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HappinessregistrationharyanaComponent } from './happinessregistrationharyana.component';
import { HappinessregistrationharyanaRoutingModule } from './happinessregistrationharyana-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HappinessregistrationharyanaComponent
  ],
  imports: [
    CommonModule, HappinessregistrationharyanaRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class HappinessregistrationharyanaModule { }
