import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilizeregistrationComponent } from './mobilizeregistration.component';

const routes: Routes = [
  {
    path:'',
    component:MobilizeregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilizeregistrationRoutingModule { }
