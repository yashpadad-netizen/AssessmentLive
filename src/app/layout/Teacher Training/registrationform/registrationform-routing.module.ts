import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationformComponent } from './registrationform.component';

const routes: Routes = [
  { path: '', component: RegistrationformComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistrationformRoutingModule { }
