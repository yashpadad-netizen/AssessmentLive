import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'RegistrationForm', loadChildren: () => import('./layout/Teacher Training/registrationform/registrationform.module').then(m => m.RegistrationformModule) },
  { path: 'DataSync', loadChildren: () => import('./datasync/datasync.module').then(m => m.DatasyncModule) },
  { path: 'CompetencyWiseQuestions', loadChildren: () => import('./competencywisequestion/competencywisequestion.module').then(m => m.CompetencywisequestionModule) },
  { path: 'DSFeedback', loadChildren: () => import('./dsfeedback/dsfeedback.module').then(m => m.DsfeedbackModule) },
  { path: 'SetWiseQuestionList', loadChildren: () => import('./setwisequestionlist/setwisequestionlist.module').then(m => m.SetwisequestionlistModule) },
  { path: 'IDIDownloadCertificate/:id/:id1', loadChildren: () => import('./CertificateDownload/idicertificate/idicertificate.module').then(m => m.IdicertificateModule) },
  { path: 'DownloadCertificate/:id/:id1', loadChildren: () => import('./CertificateDownload/studentcertificate/studentcertificate.module').then(m => m.StudentcertificateModule) },
  { path: 'CertificateSearch', loadChildren: () => import('./CertificateDownload/certificatesearch/certificatesearch.module').then(m => m.CertificatesearchModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
