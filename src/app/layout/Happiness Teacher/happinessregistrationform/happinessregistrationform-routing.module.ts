import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HappinessregistrationformComponent } from './happinessregistrationform.component';

const routes: Routes = [
  { path: '', component: HappinessregistrationformComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HappinessregistrationformRoutingModule { }
