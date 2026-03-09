import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      //CAL
      { path: 'CALPIFDashBoard', loadChildren: () => import('./CALPIFModule/startuserexam/startuserexam.module').then(m => m.StartuserexamModule) },
      { path: 'CALPIFSelectLanguage', loadChildren: () => import('./CALPIFModule/selectlanguage/selectlanguage.module').then(m => m.SelectlanguageModule) },
      { path: 'CALPIFQuestions', loadChildren: () => import('./CALPIFModule/question/question.module').then(m => m.QuestionModule) },
      { path: 'CALPIFReexam/:id', loadChildren: () => import('./CALPIFModule/question/question.module').then(m => m.QuestionModule) },
      { path: 'CALPIFResult/:id', loadChildren: () => import('./CALPIFModule/result/result.module').then(m => m.ResultModule) },
      { path: 'CALPIFCertificate/:id/:id1', loadChildren: () => import('./CALPIFModule/certtificate/certtificate.module').then(m => m.CerttificateModule) },

      //IDI
      { path: 'StudentDashboard', loadChildren: () => import('./IDIModule/startexam/startexam.module').then(m => m.StartexamModule) },
      { path: 'MainStartQuestion', loadChildren: () => import('./IDIModule/mainexamstart/mainexamstart.module').then(m => m.MainexamstartModule) },
      { path: 'StartQuestion', loadChildren: () => import('./IDIModule/startquestion/startquestion.module').then(m => m.StartquestionModule) },
      { path: 'IDIReexam/:id', loadChildren: () => import('./IDIModule/startquestion/startquestion.module').then(m => m.StartquestionModule) },
      { path: 'ExamResult/:id', loadChildren: () => import('./IDIModule/examresult/examresult.module').then(m => m.ExamresultModule) },
      { path: 'IDICertificate/:id/:id1', loadChildren: () => import('./IDIModule/coursecertificate/coursecertificate.module').then(m => m.CoursecertificateModule) },
      { path: 'CareerAwarenessExam', loadChildren: () => import('./careerawarenessexam/careerawarenessexam.module').then(m => m.CareerawarenessexamModule) },
      { path: 'PrePlacementFeedback', loadChildren: () => import('./preplacementfeedback/preplacementfeedback.module').then(m => m.PreplacementfeedbackModule) },
      { path: 'TeacherTrainingFeedback', loadChildren: () => import('./Teacher Training/teachertrainingfeedback/teachertrainingfeedback.module').then(m => m.TeachertrainingfeedbackModule) },


    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
