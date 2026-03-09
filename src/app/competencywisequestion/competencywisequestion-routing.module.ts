import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencywisequestionComponent } from './competencywisequestion.component';

const routes: Routes = [
  {
      path: '',
      component: CompetencywisequestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencywisequestionRoutingModule { }
