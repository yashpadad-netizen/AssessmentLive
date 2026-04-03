import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HappinessregistrationharyanaComponent } from './happinessregistrationharyana.component';

const routes: Routes = [
  { path: '', component: HappinessregistrationharyanaComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HappinessregistrationharyanaRoutingModule { }
