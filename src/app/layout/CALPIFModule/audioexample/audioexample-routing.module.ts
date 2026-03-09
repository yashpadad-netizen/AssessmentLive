import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AudioexampleComponent } from './audioexample.component';

const routes: Routes = [
  {
      path: '',
      component: AudioexampleComponent
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
export class AudioexampleRoutingModule { }
