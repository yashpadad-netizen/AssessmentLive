import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartquestionComponent } from './startquestion.component';
import { StartquestionRoutingModule } from './startquestion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [StartquestionComponent],
  imports: [
    CommonModule,
    StartquestionRoutingModule,
    FormsModule, ReactiveFormsModule, WebcamModule

  ]
})
export class StartquestionModule { }

