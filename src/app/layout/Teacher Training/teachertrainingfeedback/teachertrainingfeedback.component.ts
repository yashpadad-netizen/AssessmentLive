import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

export class FeedBack {
  public q1 = '';
  public q2 = '';
  public q3 = '';
  public q4 = '';
  public q5 = '';
  public q6 = '';
  public updateby = '';
  public updatetype = '';
  public language = '';
  public schoolid = '';
}

@Component({
  selector: 'app-teachertrainingfeedback',
  templateUrl: './teachertrainingfeedback.component.html',
  styleUrls: ['./teachertrainingfeedback.component.scss']
})
export class TeachertrainingfeedbackComponent implements OnInit {

  feedbackdetails: FormGroup;

  isShowSaveFeedButton = true;
  isShowUpdateFeedButton = false;

  selectedlang = 'Marathi';

  // Questions
  q1 = '';
  q2 = '';
  q3 = '';
  q4 = '';
  q5 = '';
  q6 = '';

  // Options
  yes = '';
  no = '';
  never = '';
  rarely = '';
  frequently = '';
  veryfrequently = '';
  dissatisfied = '';
  satisfied = '';
  good = '';
  excellent = '';
  UserValues;
  loading = true;
  btndisabled = false;

  constructor(private fb: FormBuilder, private service: CalpifService, private router: Router) {
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    this.loading = false;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.onSelectLanguage('Marathi');
  }

  initializeForm() {
    this.feedbackdetails = this.fb.group({
      language: ['Marathi', Validators.required],
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required]
    });
  }

  onSelectLanguage(lang: any) {
    const selected = lang?.target?.value || lang;
    this.selectedlang = selected;

    if (selected === 'Marathi') {
      this.q1 = 'कार्यशाळेच्या माध्यमातून डिजिटल साक्षर उपकरण हाताळण्याची पद्धत तुम्हाला अवगत झाली आहे का?';
      this.q2 = 'डिजिटल साक्षर अभ्यासक्रमाच्या नियमित वापराने मुलांच्या शैक्षणिक प्रगतीमध्ये किती मदत होईल?';
      this.q3 = 'शिक्षकांच्या अनुपस्थितीत विद्यार्थ्यांच्या स्वयं अध्यायानाकरिता डिजिटल साक्षर अभ्यासक्रमाचा कितपत वापर होईल?';
      this.q4 = 'प्रशिक्षकाच्या एकूण कौश्यल्यांचे मूल्यमापन करा.';
      this.q5 = 'संपूर्ण प्रशिक्षणाचे मुल्यांकन करा.';
      this.q6 = 'तुमची प्रतिक्रिया व सुचना:';

      this.yes = 'होय';
      this.no = 'नाही';
      this.never = 'काहीच नाही';
      this.rarely = 'थोडाफार';
      this.frequently = 'जास्त';
      this.veryfrequently = 'खूप जास्त';
      this.dissatisfied = 'असमाधानकारक';
      this.satisfied = 'समाधानकारक';
      this.good = 'चांगले';
      this.excellent = 'उत्कृष्ट';
    }

    if (selected === 'Hindi') {
      this.q1 = 'कार्यशाला के माध्यम से डिजिटल उपकरणों का उपयोग करने की पद्धति आपको समझ में आई क्या?';
      this.q2 = 'डिजिटल अभ्यासक्रम का नियमित उपयोग छात्रों की प्रगति में कितना सहायक होगा?';
      this.q3 = 'शिक्षकों की अनुपस्थिति में छात्रों के स्व-अध्ययन में यह कितना सहायक होगा?';
      this.q4 = 'प्रशिक्षक के कौशल का मूल्यांकन करें।';
      this.q5 = 'संपूर्ण प्रशिक्षण का मूल्यांकन करें।';
      this.q6 = 'आपकी प्रतिक्रिया एवं सुझाव:';

      this.yes = 'हाँ';
      this.no = 'नहीं';
      this.never = 'बिल्कुल नहीं';
      this.rarely = 'थोड़ा';
      this.frequently = 'अधिक';
      this.veryfrequently = 'बहुत अधिक';
      this.dissatisfied = 'असंतोषजनक';
      this.satisfied = 'संतोषजनक';
      this.good = 'अच्छा';
      this.excellent = 'उत्कृष्ट';
    }

    this.feedbackdetails.patchValue({ language: selected });
  }

  updateFeedback() {

    const username = this.UserValues.username;
    const coursename = this.UserValues.coursename;

    this.loading = true;
    this.btndisabled = true;

    const data: FeedBack = new FeedBack();
    data.q1 = this.feedbackdetails.value.q1;
    data.q2 = this.feedbackdetails.value.q2;
    data.q3 = this.feedbackdetails.value.q3;
    data.q4 = this.feedbackdetails.value.q4;
    data.q5 = this.feedbackdetails.value.q5;
    data.q6 = this.feedbackdetails.value.q6;
    data.language = this.selectedlang;
    data.schoolid = coursename;

    this.service.InsertTeacherTrainingFeedbackLMS(username, data).subscribe((res: any) => {
      if (res == 'Success') {
        this.loading = false;
        alert('Feedback Saved Successfully!')
        this.router.navigate(['/login']);
      }
      if (res == 'Exists') {
        this.loading = false;
        alert('Feedback Already Exists!')
        this.router.navigate(['/login']);
      }
    })
  }

}