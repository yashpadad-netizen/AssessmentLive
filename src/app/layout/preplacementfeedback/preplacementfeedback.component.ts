import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';
export class PrePlacementFeedback {
  public q1: string = '';
  public q2: string = '';
  public q3: string = '';
  public q4: string = '';
  public q5: string = '';
  public q6: string = '';
  public q7: string = '';
  public q8: string = '';
  public q9: string = '';
  public q10: string = '';
  public q11: string = '';
  public q12: string = '';
  public q13: string = '';
  public q14: string = '';
  public q15: string = '';
  public q16: string = '';
  public q17: string = '';
  public language: string = '';
  public userid: string = '';
  public studentid: string = '';
  public studentname: string = '';
}
@Component({
  selector: 'app-preplacementfeedback',
  templateUrl: './preplacementfeedback.component.html',
  styleUrls: ['./preplacementfeedback.component.scss']
})
export class PreplacementfeedbackComponent implements OnInit {
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
  q2;
  q3;
  q4;
  q5;
  q6;
  q7;
  q8;
  q9;
  q10;
  q11;

  option11;
  option12;
  option13;

  option21;
  option22;
  option23;

  option31;
  option32;
  option33;
  option34;

  option41;
  option42;
  option43;
  option44;

  option51;
  option52;
  option53;

  option61;
  option62;
  option63;

  option71;
  option72;
  option73;

  option81;
  option82;
  option83;
  option84;

  poor;
  fair;
  good;
  veryGood;
  excellent;

  loaded;
  btndisabled = false;

  beforeSession;
  afterSession;
  satisfactory;

  q3model = '0';
  q4model = '0';
  q5model = '0';
  q6model = '0';

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
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required],
      q12: ['', Validators.required],
      q13: ['', Validators.required],
      q14: ['', Validators.required],
      q15: ['', Validators.required],
      q16: ['', Validators.required],
      q17: ['', Validators.required]
    });

  }

  onSelectLanguage(lang) {

    this.selectedlang = lang;

    if(lang == 'English'){

      this.q1 = 'How satisfied were you with the Session?';
      this.option11 = 'Very Satisfied';
      this.option12 = 'Satisfied';
      this.option13 = 'Not Satisfied';

      this.q2 = 'How confident do you feel about attending a real interview after this session?';
      this.option21 = 'Very confident';
      this.option22 = 'Somewhat confident';
      this.option23 = 'Not sure';

      this.q3 = 'Which topic was most useful for you in this session?';
      this.option31 = 'Interview types';
      this.option32 = 'Resume/CV writing';
      this.option33 = 'Grooming tips';
      this.option34 = 'Job search portals';

      this.q4 = 'How helpful was the mock interview or role-play activity (if conducted)?';
      this.option41 = 'Very helpful';
      this.option42 = 'Somewhat helpful';
      this.option43 = 'Not helpful';
      this.option44 = 'We didn’t do this';

      this.q5 = 'Did this session help you understand how to search for jobs online?';
      this.option51 = 'Yes, very clearly';
      this.option52 = 'Somewhat';
      this.option53 = 'No';

      this.q6 = 'How comfortable do you feel speaking about yourself in an interview now?';
      this.option61 = 'Very comfortable';
      this.option62 = 'somewhat comfortable';
      this.option63 = 'Not comfortable at all';

      this.q7 = 'Was the session language and examples easy to understand?';
      this.option71 = 'Yes, very clear';
      this.option72 = 'Somewhat clear';
      this.option73 = 'Difficult to follow';

      this.q8 = 'How would you rate the instructor?';
      this.option81 = 'Presentation';
      this.option82 = 'Knowledge & command of subject';
      this.option83 = 'Open exchange of ideas';
      this.option84 = 'Group interaction';

      this.q9 = 'Session Impact';

      this.q10 = 'Session Impact';

      this.q11 = 'Overall feedback or suggestions for the session.';

      this.poor = 'Poor';
      this.fair = 'Fair';
      this.good = 'Good';
      this.veryGood = 'Very Good';
      this.excellent = 'Excellent';
      this.satisfactory = 'Satisfactory';
      this.beforeSession = 'Before session Understanding';
      this.afterSession = 'After session Understanding';

    }
    else if(lang == 'Marathi'){

      this.q1 = '1)	आपण या सत्राबद्दल किती समाधानी आहात?';
      this.option11 = 'खूप समाधानी';
      this.option12 = 'समाधानी';
      this.option13 = 'असमाधानी';

      this.q2 = 'या सत्रानंतर खरी मुलाखत देण्यासाठी तुम्हाला किती आत्मविश्वास वाटतो?';
      this.option21 = 'खूप आत्मविश्वास';
      this.option22 = 'काही प्रमाणात आत्मविश्वास';
      this.option23 = 'खात्री नाही';

      this.q3 = 'या सत्रातील कोणता विषय तुमच्यासाठी सर्वात उपयुक्त होता?';
      this.option31 = 'मुलाखतीचे प्रकार';
      this.option32 = 'रेझ्युमे/सीव्ही लेखन';
      this.option33 = 'ग्रूमिंग टिप्स';
      this.option34 = 'नोकरी शोध पोर्टल्स';

      this.q4 = 'मॉक इंटरव्ह्यू किंवा रोल-प्ले उपक्रम (जर घेतला असेल) किती उपयुक्त होता?';
      this.option41 = 'खूप उपयुक्त';
      this.option42 = 'काही प्रमाणात उपयुक्त';
      this.option43 = 'उपयुक्त नाही';
      this.option44 = 'आम्ही हे केले नाही';

      this.q5 = 'या सत्राने तुम्हाला ऑनलाइन नोकरी कशी शोधावी हे समजण्यास मदत केली का?';
      this.option51 = 'हो, खूप स्पष्टपणे';
      this.option52 = 'काही प्रमाणात';
      this.option53 = 'नाही';

      this.q6 = 'आता मुलाखतीत स्वतःबद्दल बोलताना तुम्हाला किती सोयीस्कर वाटेल?';
      this.option61 = 'खूप सोयीस्कर';
      this.option62 = 'काही प्रमाणात सोयीस्कर';
      this.option63 = 'अजिबात सोयीस्कर नाही';

      this.q7 = 'सत्रातील भाषा आणि उदाहरणे समजायला सोपी होती का?';
      this.option71 = 'हो, खूप स्पष्ट';
      this.option72 = 'काही प्रमाणात स्पष्ट';
      this.option73 = 'समजायला कठीण';

      this.q8 = 'प्रशिक्षकाचे मूल्यमापन:';
      this.option81 = 'सादरीकरण';
      this.option82 = 'विषयाचे ज्ञान आणि प्रभुत्व';
      this.option83 = 'विचारांची देवाणघेवाण';
      this.option84 = 'गट संवाद';

      this.q9 = 'सत्राचा प्रभाव';

      this.q10 = 'सत्राचा प्रभाव';

      this.q11 = 'सत्राबद्दल तुमचा एकूण अभिप्राय किंवा सूचना:';

      this.poor = 'खराब';
      this.fair = 'सरासरी';
      this.good = 'चांगले';
      this.veryGood = 'फार चांगले';
      this.excellent = 'उत्कृष्ट';
      this.satisfactory = 'समाधानकारक';
      this.beforeSession = 'सत्रापूर्वीची समज';
      this.afterSession = 'सत्रानंतरची समज';

    }
    else if(lang == 'Hindi'){

      this.q1 = 'आप इस सत्र से कितने संतुष्ट है?';
      this.option11 = 'बहुत संतुष्ट';
      this.option12 = 'संतुष्ट';
      this.option13 = 'असंतुष्ट';

      this.q2 = 'इस सत्र के बाद वास्तविक इंटरव्यू (Interview) में शामिल होने को लेकर आप कितने आत्मविश्वासी महसूस करते हैं?';
      this.option21 = 'बहुत आत्मविश्वास';
      this.option22 = 'कुछ हद तक आत्मविश्वास';
      this.option23 = 'निश्चित नहीं';

      this.q3 = 'इस सत्र में आपके लिए सबसे उपयोगी विषय कौन-सा था?';
      this.option31 = 'इंटरव्यूके प्रकार';
      this.option32 = 'रिज़्यूमे/सीवी लेखन';
      this.option33 = 'ग्रूमिंग टिप्स';
      this.option34 = 'नौकरी खोज पोर्टल्स';

      this.q4 = 'मॉक इंटरव्यू या रोल-प्ले गतिविधि (यदि आयोजित की गई) कितनी उपयोगी रही?';
      this.option41 = 'बहुत उपयोगी';
      this.option42 = 'कुछ हद तक उपयोगी';
      this.option43 = 'उपयोगी नहीं';
      this.option44 = 'हमने यह नहीं किया';

      this.q5 = 'क्या इस सत्र ने आपको ऑनलाइन नौकरी खोजने की प्रक्रिया समझने में मदद की?';
      this.option51 = 'हाँ, बहुत स्पष्ट रूप से';
      this.option52 = 'कुछ हद तक';
      this.option53 = 'नहीं';

      this.q6 = 'अब आप इंटरव्यू में अपने बारे में बोलने में कितने सहज महसूस करते हैं?';
      this.option61 = 'बहुत सहज';
      this.option62 = 'कुछ हद तक सहज';
      this.option63 = 'बिल्कुल भी सहज नहीं';

      this.q7 = 'क्या सत्र की भाषा और उदाहरण समझने में आसान थे?';
      this.option71 = 'हाँ, बहुत स्पष्ट';
      this.option72 = 'कुछ हद तक स्पष्ट';
      this.option73 = 'समझने में कठिन';

      this.q8 = 'प्रशिक्षक का मूल्यांकन:';
      this.option81 = 'प्रस्तुति';
      this.option82 = 'विषय का ज्ञान और पकड';
      this.option83 = 'विचारों का आदान-प्रदान';
      this.option84 = 'समूह सहभागिता';

      this.q9 = 'सत्र का प्रभाव';

      this.q10 = 'सत्र का प्रभाव';

      this.q11 = 'सत्र के लिए समग्र प्रतिक्रिया या सुझाव!';

      this.poor = 'खराब';
      this.fair = 'ठीक';
      this.good = 'अच्छा';
      this.veryGood = 'बहुत अच्छा';
      this.excellent = 'उत्कृष्ट';
      this.satisfactory = 'संतोषजनक';
      this.beforeSession = 'सत्र से पहले की समझ';
      this.afterSession = 'सत्र के बाद की समझ';

    }
    else if(lang == 'Gujarati'){

      this.q1 = 'તમે આ સત્રથી કેટલા સંતોષ અનુભવો છો?';
      this.option11 = 'ખૂબ સંતોષી';
      this.option12 = 'સંતોષી';
      this.option13 = 'અસંતોષી';

      this.q2 = 'આ સત્ર પછી વાસ્તવિક ઈન્ટરવ્યુમાં હાજરી આપવા અંગે તમે કેટલા આત્મવિશ્વાસી અનુભવો છો?';
      this.option21 = 'ખૂબ આત્મવિશ્વાસી';
      this.option22 = 'થોડા આત્મવિશ્વાસી';
      this.option23 = 'ખાતરી નથી';

      this.q3 = 'આ સત્રમાં તમારા માટે સૌથી ઉપયોગી વિષય કયો હતો?';
      this.option31 = 'ઈન્ટરવ્યુના પ્રકારો';
      this.option32 = 'રિઝ્યૂમે/સીવી લેખન';
      this.option33 = 'ગ્રુમિંગ ટીપ્સ';
      this.option34 = 'નોકરી શોધ પોર્ટલ્સ';

      this.q4 = 'મૉક ઈન્ટરવ્યુ અથવા રોલ-પ્લે પ્રવૃત્તિ (જો યોજાઈ હોય) તમારા માટે કેટલી મદદરૂપ રહી?';
      this.option41 = 'ખૂબ મદદરૂપ';
      this.option42 = 'થોડીક મદદરૂપ';
      this.option43 = 'મદદરૂપ નથી';
      this.option44 = 'અમે આ કર્યું નથી';

      this.q5 = 'શું આ સત્રએ તમને ઑનલાઇન નોકરી શોધવાની રીત સમજવામાં મદદ કરી?';
      this.option51 = 'હા, ખૂબ સ્પષ્ટ રીતે';
      this.option52 = 'થોડુંક';
      this.option53 = 'નહીં';

      this.q6 = 'હવે ઈન્ટરવ્યુમાં તમારા વિશે બોલવામાં તમને કેટલું આરામદાયક લાગે છે?';
      this.option61 = 'ખૂબ આરામદાયક';
      this.option62 = 'થોડુંક આરામદાયક';
      this.option63 = 'બિલકુલ આરામદાયક નથી';

      this.q7 = 'સત્રની ભાષા અને ઉદાહરણો સમજવા માટે સરળ હતા કે નહીં?';
      this.option71 = 'હા, ખૂબ સ્પષ્ટ';
      this.option72 = 'થોડુંક સ્પષ્ટ';
      this.option73 = 'સમજવા મુશ્કેલ';

      this.q8 = 'પ્રશિક્ષકનું મૂલ્યાંકન';
      this.option81 = 'પ્રેઝન્ટેશન';
      this.option82 = 'વિષયનું જ્ઞાન અને પકડ';
      this.option83 = 'વિચારોનું ખુલ્લું આપલે-લે';
      this.option84 = 'જૂથ પરસ્પર ક્રિયાશીલતા';

      this.q9 = 'સત્રનો પ્રભાવ';

      this.q10 = 'સત્રનો પ્રભાવ';

      this.q11 = 'સત્ર માટે તમારો કુલ પ્રતિસાદ અથવા સૂચનો.';

      this.poor = 'ખરાબ';
      this.fair = 'સરેરાશ';
      this.good = 'સારું';
      this.veryGood = 'ખૂબ સારું';
      this.excellent = 'ઉત્તમ';
      this.satisfactory = 'સંતોષકારક';
      this.beforeSession = 'સત્ર પહેલાંની સમજ';
      this.afterSession = 'સત્ર પછીની સમજ';

    }

  }

  onSubmit(value) {
    this.loading = true;
    this.btndisabled = true;
    const data: PrePlacementFeedback = new PrePlacementFeedback();
    data.q1 = this.feedbackform.value.q1;
    data.q2 = this.feedbackform.value.q2;
    data.q3 = this.q3model;
    data.q4 = this.q4model;
    data.q5 = this.q5model;
    data.q6 = this.q6model;
    data.q7 = this.feedbackform.value.q7;
    data.q8 = this.feedbackform.value.q8;
    data.q9 = this.feedbackform.value.q9;
    data.q10 = this.feedbackform.value.q10;
    data.q11 = this.feedbackform.value.q11;
    data.q12 = this.feedbackform.value.q12;
    data.q13 = this.feedbackform.value.q13;
    data.q14 = this.feedbackform.value.q14;
    data.q15 = this.feedbackform.value.q15;
    data.q16 = this.feedbackform.value.q16;
    data.q17 = this.feedbackform.value.q17;
    data.studentid = this.studentid;
    data.studentname = this.studentname;
    data.language = this.selectedlang;
    data.userid = this.userid;
    
    this.service.InsertPrePlacementFeedback(this.userid, data).subscribe((res: any) => {
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
