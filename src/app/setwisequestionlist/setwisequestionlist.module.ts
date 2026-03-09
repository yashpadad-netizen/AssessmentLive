import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetwisequestionlistComponent } from './setwisequestionlist.component';
import { SetwisequestionlistRoutingModule } from './setwisequestionlist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [SetwisequestionlistComponent],
  imports: [
    CommonModule,
    SetwisequestionlistRoutingModule,ReactiveFormsModule,FormsModule,NgxPaginationModule
  ]
})
export class SetwisequestionlistModule { }
