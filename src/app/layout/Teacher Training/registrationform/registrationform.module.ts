import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './registrationform.component';
import { RegistrationformRoutingModule } from './registrationform-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationformComponent
  ],
  imports: [
    CommonModule, RegistrationformRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class RegistrationformModule { }
