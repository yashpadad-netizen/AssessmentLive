import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectlanguageComponent } from './selectlanguage.component';

const routes: Routes = [
  {
      path: '',
      component: SelectlanguageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SelectlanguageRoutingModule { }
