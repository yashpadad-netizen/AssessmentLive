import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-happinessteacherfeedback',
  templateUrl: './happinessteacherfeedback.component.html',
  styleUrls: ['./happinessteacherfeedback.component.scss']
})
export class HappinessteacherfeedbackComponent implements OnInit {
  loading = false;
  selectedLang = 'English';

  q1 = '';
  q2 = '';
  q3 = '';
  q4 = '';
  q5 = '';
  q6 = '';
  q7 = '';
  q8 = '';

  a1 = '';
  a2 = '';
  a3 = '';

  b1 = '';
  b2 = '';
  b3 = '';

  c1 = '';
  c2 = '';
  c3 = '';

  d1 = '';
  d2 = '';
  d3 = '';

  e1 = '';
  e2 = '';
  e3 = '';

  f1 = '';
  f2 = '';
  f3 = '';

  g1 = '';
  g2 = '';
  g3 = '';

  h1 = '';
  h2 = '';
  h3 = '';

  readonly form;

  private readonly userValues = JSON.parse(sessionStorage.getItem('Uservalue') ?? '{}');

  constructor(
    private readonly fb: FormBuilder,
    private readonly Service: CalpifService,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      language: ['English', Validators.required],
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.setLanguage('English');
  }

  setLanguage(lang: string): void {
    this.selectedLang = lang;
    this.form.patchValue({ language: lang });

    if (lang === 'Marathi') {
      this.q1 = 'आपल्या शाळेत Happiness Lab उपक्रम राबविण्यास  आपण इच्छुक आहात का?';
      this.a1 = 'होय';
      this.a2 = 'काही प्रमाणात';
      this.a3 = 'नाही';

      this.q2 = 'Happiness Lab उपक्रमांनंतर शाळेच्या वातावरणात किती बदल दिसून आला?';
      this.b1 = 'लक्षणीय बदल';
      this.b2 = 'अशंत: बदल';
      this.b3 = 'कोणताही बदल नाही';

      this.q3 = '3.	आपल्या शाळेत Compassion Day (करुणा दिवस) हा दिवस साजरा करण्यात आला होता का?';
      this.c1 = 'होय';
      this.c2 = 'नाही';
      this.c3 = 'नियोजन केले आहे, पण अद्याप केलेला नाही';

      this.q4 = 'Compassion Day दरम्यान विद्यार्थ्यांनी कोणत्या क्रियांमध्ये सहभाग घेतला?';
      this.d1 = 'करुणा शपथ (Compassion Oath) घेणे';
      this.d2 = 'करुणा भिंत (Compassion Wall) तयार करणे';
      this.d3 = 'दोन्ही – करुणा शपथ घेणे आणि करुणा भिंत तयार करणे';

      this.q5 = '5.	या उपक्रमांनंतर विद्यार्थ्यांच्या वर्तनात सकारात्मक बदल आपण पाहिला आहे का?';
      this.e1 = 'होय, स्पष्टपणे';
      this.e2 = 'काही प्रमाणात';
      this.e3 = 'नाही';

      this.q6 = 'हॅपिनेस लॅबची  सत्रे विद्यार्थ्यांच्या भावनिक विकासाला कितपत मदत करतात?';
      this.f1 = 'खूप मदत करतात';
      this.f2 = 'काही प्रमाणात मदत करतात';
      this.f3 = 'मदत करत नाहीत';

      this.q7 = 'विद्यार्थ्यांसाठी Happiness Literacy चे उपक्रम कितपत उपयुक्त वाटतात';
      this.g1 = 'खूप उपयुक्त';
      this.g2 = 'काही प्रमाणात उपयुक्त';
      this.g3 = 'उपयुक्त नाहीत';

      this.q8 = 'विद्यार्थ्यांनी उपक्रमांमध्ये  किती उत्साहाने  आणि आनंदाने सहभाग घेतला?';
      this.h1 = 'मोठ्या प्रमाणात';
      this.h2 = 'काही प्रमाणात';
      this.h3 = 'अजिबात नाही';
      return;
    }

    if (lang === 'Hindi') {
      this.q1 = 'आप अपने विद्यालय में Happiness Lab की गतिविधियाँ आयोजित करने में  इच्छुक हैं?';
      this.a1 = 'हाँ';
      this.a2 = 'आंशिक रूप से';
      this.a3 = 'नहीं';

      this.q2 = 'Happiness Lab गतिविधियों के बाद विद्यालय के वातावरण में कितना बदलाव दिखाई दिया?';
      this.b1 = 'महत्वपूर्ण बदलाव';
      this.b2 = 'आंशिक बदलाव';
      this.b3 = 'कोई बदलाव नहीं';

      this.q3 = 'क्या आपके विद्यालय में Compassion Day (करुणा दिन) मनाया गया था?';
      this.c1 = 'हाँ';
      this.c2 = 'नहीं';
      this.c3 = 'योजना बनाई गई है, लेकिन अभी तक मनाया नहीं गया है';

      this.q4 = 'Compassion Day के दौरान विद्यार्थियों ने किन गतिविधियों में भाग लिया?';
      this.d1 = 'करुणा शपथ (Compassion Oath) लेना';
      this.d2 = 'करुणा दीवार (Compassion Wall) बनाना';
      this.d3 = 'दोनों – करुणा शपथ लेना और करुणा दीवार बनाना';

      this.q5 = 'इन गतिविधियों के बाद क्या आपने विद्यार्थियों के व्यवहार में सकारात्मक बदलाव देखा है?';
      this.e1 = 'हाँ, स्पष्ट रूप से';
      this.e2 = 'आंशिक बदलाव';
      this.e3 = 'नहीं';

      this.q6 = 'Happiness Lab के सत्र विद्यार्थियों के भावनात्मक विकास में कितनी सहायता करते हैं?';
      this.f1 = 'अत्यधिक सहायता करते हैं';
      this.f2 = 'आंशिक सहायता करते हैं';
      this.f3 = 'सहायता नहीं करते';

      this.q7 = 'विद्यार्थियों के लिए Happiness Literacy की गतिविधियाँ कितनी उपयोगी लगती हैं?';
      this.g1 = 'अत्यधिक उपयोगी';
      this.g2 = 'आंशिक रूप से उपयोगी';
      this.g3 = 'उपयोगी नहीं';

      this.q8 = 'विद्यार्थियों ने गतिविधियों में कितने उत्साह और आनंद के साथ भाग लिया?';
      this.h1 = 'बहुत अधिक';
      this.h2 = 'कुछ हद तक';
      this.h3 = 'बिल्कुल नहीं';
      return;
    }

    if (lang === 'English') {
      this.q1 = 'Are you interested in conducting Happiness Lab activities in your school?';
      this.a1 = 'Yes';
      this.a2 = 'Somewhat';
      this.a3 = 'No';

      this.q2 = 'How much change have you observed in the school environment after the Happiness Lab activities?';
      this.b1 = 'Significant Change';
      this.b2 = 'Moderate Change';
      this.b3 = 'No Change';

      this.q3 = 'Has your school celebrated the Compassion Day activity?';
      this.c1 = 'Yes';
      this.c2 = 'No';
      this.c3 = 'Planned but not yet conducted';

      this.q4 = 'Which activities have you observed students engaging in during the Compassion Day initiative?';
      this.d1 = 'Compassion Oath/Pledge Taking';
      this.d2 = 'Creation of a Compassion Wall';
      this.d3 = 'Both – Compassion Oath Taking and Compassion Wall Creation';

      this.q5 = 'Have you observed positive behavioral changes in your students after these initiatives?';
      this.e1 = 'Yes, clearly';
      this.e2 = 'Somewhat';
      this.e3 = 'No';

      this.q6 = 'Do Happiness Lab sessions support students’ emotional well-being?';
      this.f1 = 'Very supportive';
      this.f2 = 'Somewhat supportive';
      this.f3 = 'Not supportive';

      this.q7 = 'How useful do you find the Happiness Literacy activities for students?';
      this.g1 = 'Very Useful';
      this.g2 = 'Somewhat Useful';
      this.g3 = 'Not Useful';

      this.q8 = 'To what extent did students show interest and enjoyment in the activities conducted?';
      this.h1 = 'To a great extent';
      this.h2 = 'To some extent';
      this.h3 = 'Not at all';
    }
  }

  submit(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }

    const username = String(this.userValues.username ?? '');
    const coursename = String(this.userValues.coursename ?? '');

    this.loading = true;
    const payload = {
      q1: this.form.value.q1,
      q2: this.form.value.q2,
      q3: this.form.value.q3,
      q4: this.form.value.q4,
      q5: this.form.value.q5,
      q6: this.form.value.q6,
      q7: this.form.value.q7,
      q8: this.form.value.q8,
      language: this.selectedLang,
      schoolid: coursename,
    };

    this.Service.InsertHappinessTeacherFeedback(username, payload).subscribe({
      next: (res) => {
        this.loading = false;
        if (res === 'Already Exist') {
          alert('Feedback Already Exists!');
        }
        if (res === 'Success') {
          alert('Feedback Saved Successfully!');
        }
        else {
          alert('Teacher Not Found.');
        }
        this.router.navigateByUrl('/login');
      },
      error: () => {
        this.loading = false;
        alert('Unable to save feedback. Please try again.');
      },
    });
  }
}
