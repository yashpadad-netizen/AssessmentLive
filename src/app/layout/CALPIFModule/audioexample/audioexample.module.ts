import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioexampleComponent } from './audioexample.component';
import { AudioexampleRoutingModule } from './audioexample-routing.module';

@NgModule({
  declarations: [AudioexampleComponent],
  imports: [
    CommonModule,
    AudioexampleRoutingModule
  ]
})
export class AudioexampleModule { }
