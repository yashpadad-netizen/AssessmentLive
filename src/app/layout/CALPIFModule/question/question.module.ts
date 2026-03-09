import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,ReactiveFormsModule,
    WebcamModule
  ]
})
export class QuestionModule { }
