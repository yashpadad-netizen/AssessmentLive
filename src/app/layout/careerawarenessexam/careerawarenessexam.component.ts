import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

export class careerawareness {
  public subject: string = '';
  public continuestudies: string = '';
  public computersubject: string = '';
  public likecomputer: string = '';
  public optionalsubject: string = '';
  public becomefuture: string = '';
  public preferedstream: string = '';
  public aspirefutureyes: string = '';
  public aspirefuture: string = '';
  public ratecomputer: string = '';
  public compteacher: string = '';
  public coursename: string = '';
  public language: string = '';
  public userid: string = '';
  public studentid: string = '';
  public studentname: string = '';
}

@Component({
  selector: 'app-careerawarenessexam',
  templateUrl: './careerawarenessexam.component.html',
  styleUrls: ['./careerawarenessexam.component.scss']
})
export class CareerawarenessexamComponent implements OnInit {
  userid: string;
  studentid: string;
  programid: string;
  UserValues: any;
  studentname: any;
  coursename: any;
  loading = true;
  feedbackform: FormGroup;
  selectedlang;
  q1;
  option11;
  option12;
  option13;
  option14;
  option15;
  q2;
  q3;
  q4;
  q5;
  q6;
  q7;
  option71;
  option72;
  option73;
  option74;
  option75;
  q8;
  q9;
  q10;
  q11;
  yes;
  no;
  good;
  average;
  poor;
  loaded;
  btndisabled = false;

  constructor(private fb: FormBuilder, private service: CalpifService, private router: Router) {
    this.userid = localStorage.getItem('UserId');
    this.programid = localStorage.getItem('Programid');

    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    this.studentname = this.UserValues.fullname;
    this.coursename = this.UserValues.coursename;
    this.studentid = this.UserValues.username;
    this.loading = false;
  }

  ngOnInit(): void {

    this.feedbackform = this.fb.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required]
    });

  }

  onSelectLanguage(lang) {

    this.selectedlang = lang;

    if (lang == 'English') {

      this.q1 = 'What is your favourite subject in school?';
      this.option11 = 'Language';
      this.option12 = 'Mathematics';
      this.option13 = 'Science';
      this.option14 = 'Social Science';
      this.option15 = 'Computer';

      this.q2 = 'Do you wish to continue your studies /education after passing out of school?';

      this.q3 = 'Do you feel learning computer skills is important for your future?';

      this.q4 = 'Do you enjoy learning computer-related subjects?';

      this.q5 = 'Would you like to choose Computer as an optional subject in higher grades?';

      this.q6 = 'Do you have a clear idea about what you want to become in the future?';

      this.q7 = 'Which stream would you prefer to choose after Class 10 or Class 12?';
      this.option71 = 'Science';
      this.option72 = 'Commerce';
      this.option73 = 'Arts/Humanities';
      this.option74 = 'Vocational';
      this.option75 = 'Not decided';

      this.q8 = 'Do you feel your school is helping you prepare for your future career?';

      this.q9 = 'What career do you aspire to pursue in the future?';

      this.q10 = 'Rate the computer program in your school:';

      this.q11 = 'Rate your computer teacher in your school:';

      this.yes = 'Yes';
      this.no = 'No';

      this.good = 'Good';
      this.average = 'Average';
      this.poor = 'Poor';

    }
    if (lang == 'Marathi') {

      this.q1 = 'शाळेत तुमचा आवडता विषय कोणता आहे?';
      this.option11 = 'भाषा';
      this.option12 = 'गणित';
      this.option13 = 'विज्ञान';
      this.option14 = 'सामाजिक शास्त्र';
      this.option15 = 'संगणक';

      this.q2 = 'आपल्याला शाळेनंतर शिक्षण पुढे सुरू ठेवायचे आहे का?';

      this.q3 = 'तुमच्या भविष्यासाठी संगणक कौशल्ये शिकणे महत्त्वाचे आहे असे तुम्हाला वाटते का?';

      this.q4 = 'तुम्हाला संगणकाशी संबंधित विषय शिकायला आवडते का?';

      this.q5 = 'उच्च शिक्षणात  संगणक हा ऐच्छिक विषय म्हणून निवडायला तुम्हाला आवडेल का?';

      this.q6 = 'भविष्यात तुम्हाला काय व्हायचे आहे याची तुम्हाला स्पष्ट कल्पना आहे का?';

      this.q7 = 'इयत्ता 10 किंवा इयत्ता 12 नंतर तुम्ही कोणती शाखा (स्ट्रीम) निवडू इच्छिता?';
      this.option71 = 'विज्ञान';
      this.option72 = 'वाणिज्य';
      this.option73 = 'कला/मानवविद्या';
      this.option74 = 'व्यावसायिक';
      this.option75 = 'अजून ठरलेले नाही';

      this.q8 = 'तुमची शाळा तुम्हाला भविष्यातील करिअरसाठी तयारी करण्यात मदत करत आहे असे तुम्हाला वाटते का?';

      this.q9 = 'भविष्यात तुम्ही कशात करिअर करण्याची इच्छा बाळगता?';

      this.q10 = 'तुमच्या शाळेतील संगणक कार्यक्रमाचे मूल्यांकन करा:';

      this.q11 = 'तुमच्या शाळेतील संगणक शिक्षकांचे मूल्यांकन करा:';

      this.yes = 'होय';
      this.no = 'नाही';

      this.good = 'उत्तम';
      this.average = 'समाधानकारक';
      this.poor = 'असमाधानकारक';
    }
    if (lang == 'Gujarati') {

      this.q1 = 'શાળામાં તમારો મનપસંદ વિષય કયો છે?';
      this.option11 = 'ભાષા';
      this.option12 = 'ગણિત';
      this.option13 = 'વિજ્ઞાન';
      this.option14 = 'સામાજિક વિજ્ઞાન';
      this.option15 = 'કમ્પ્યુટર';

      this.q2 = 'શું તમે શાળા પૂર્ણ કર્યા પછી તમારી અભ્યાસ / શિક્ષણ આગળ ચાલુ રાખવા ઇચ્છો છો?';

      this.q3 = 'શું તમને લાગે છે કે કમ્પ્યુટર કુશળતા શીખવી તમારા ભવિષ્ય માટે મહત્વપૂર્ણ છે?';

      this.q4 = 'શું તમને કમ્પ્યુટર સંબંધિત વિષયો શીખવામાં આનંદ આવે છે?';

      this.q5 = 'શું તમે ઉચ્ચ ધોરણોમાં કમ્પ્યુટરને વૈકલ્પિક વિષય તરીકે પસંદ કરશો?';

      this.q6 = 'તમને ભવિષ્યમાં શું બનવું છે તેની સ્પષ્ટ કલ્પના છે?';

      this.q7 = 'ધોરણ 10 અથવા ધોરણ 12 પછી તમે કયો પ્રવાહ (stream) પસંદ કરશો?';
      this.option71 = 'વિજ્ઞાન';
      this.option72 = 'વાણિજ્ય';
      this.option73 = 'કલા/માનવિક વિજ્ઞાન';
      this.option74 = 'વ્યાવસાયિક';
      this.option75 = 'હજુ નક્કી નથી';

      this.q8 = 'શું તમને લાગે છે કે તમારી શાળા તમારા ભવિષ્યના કારકિર્દી માટે તૈયારી કરવામાં મદદ કરી રહી છે?';

      this.q9 = 'ભવિષ્યમાં તમે કઈ કારકિર્દી અપનાવવાની ઇચ્છા રાખો છો?';

      this.q10 = 'તમારી શાળાના કમ્પ્યુટર કાર્યક્રમનું મૂલ્યાંકન કરો:';

      this.q11 = 'તમારી શાળાના કમ્પ્યુટર શિક્ષકનું મૂલ્યાંકન કરો:';

      this.yes = 'હા';
      this.no = 'ના';

      this.good = 'સારું';
      this.average = 'સરેરાશ';
      this.poor = 'નબળું';
    }
    if (lang == 'Hindi') {

      this.q1 = 'स्कूल में आपका पसंदीदा विषय कौन-सा है?';
      this.option11 = 'भाषा';
      this.option12 = 'गणित';
      this.option13 = 'विज्ञान';
      this.option14 = 'सामाजिक विज्ञान';
      this.option15 = 'कंप्यूटर';

      this.q2 = 'क्या आप स्कूल पास करने के बाद अपनी पढ़ाई/शिक्षा जारी रखना चाहते हैं?';

      this.q3 = 'क्या आपको लगता है कि कंप्यूटर कौशल सीखना आपके भविष्य के लिए महत्वपूर्ण है?';

      this.q4 = 'क्या आपको कंप्यूटर से संबंधित विषय पढ़ना अच्छा लगता है?';

      this.q5 = 'क्या आप उच्च कक्षाओं में कंप्यूटर को वैकल्पिक विषय के रूप में चुनना चाहेंगे?';

      this.q6 = 'क्या आपको यह स्पष्ट है कि आप भविष्य में क्या बनना चाहते हैं?';

      this.q7 = 'कक्षा 10 या कक्षा 12 के बाद आप कौन-सा स्ट्रीम चुनना चाहेंगे?';
      this.option71 = 'विज्ञान';
      this.option72 = 'वाणिज्य';
      this.option73 = 'कला/मानविकी';
      this.option74 = 'व्यावसायिक';
      this.option75 = 'अभी तय नहीं';

      this.q8 = 'क्या आपको लगता है कि आपका विद्यालय आपके भविष्य के करियर की तैयारी में आपकी मदद कर रहा है?';

      this.q9 = 'भविष्य में आप कौन-सा करियर अपनाना चाहते हैं?';

      this.q10 = 'अपने विद्यालय के कंप्यूटर कार्यक्रम का मूल्यांकन करें:';

      this.q11 = 'अपने विद्यालय के कंप्यूटर शिक्षक का मूल्यांकन करें:';

      this.yes = 'हाँ';
      this.no = 'नहीं';

      this.good = 'उत्तम';
      this.average = 'सामान्य';
      this.poor = 'असंतोषजनक';
    }
  }

  onSubmit(value) {
    this.loading = true;
    this.btndisabled = true;
    const data: careerawareness = new careerawareness();
    data.subject = this.feedbackform.value.q1;
    data.continuestudies = this.feedbackform.value.q2;
    data.computersubject = this.feedbackform.value.q3;
    data.likecomputer = this.feedbackform.value.q4;
    data.optionalsubject = this.feedbackform.value.q5;
    data.becomefuture = this.feedbackform.value.q6;
    data.preferedstream = this.feedbackform.value.q7;
    data.aspirefutureyes = this.feedbackform.value.q8;
    data.aspirefuture = this.feedbackform.value.q9;
    data.ratecomputer = this.feedbackform.value.q10;
    data.compteacher = this.feedbackform.value.q11;
    data.userid = this.userid;
    data.studentid = this.studentid;
    data.coursename = this.coursename;
    data.language = this.selectedlang;
    data.studentname = this.studentname;

    this.service.InsertCareerAwareness(this.userid, data).subscribe((res: any) => {
      if (res == 'Success') {
        this.loading = false;
        alert('Exam Saved Successfully!')
        this.router.navigate(['/login']);
      }
      if (res == 'Exists') {
        this.loading = false;
        alert('Exam Already Exists!')
        this.router.navigate(['/login']);
      }
    })
  }

}