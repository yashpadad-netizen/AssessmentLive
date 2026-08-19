import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

interface RatingOption {
  value: number;
  label: string;
}

interface TranslationDictionary {
  [key: string]: {
    [key: string]: string;
  };
}

@Component({
  selector: 'app-teacherworkshopfeedback',
  templateUrl: './teacherworkshopfeedback.component.html',
  styleUrls: ['./teacherworkshopfeedback.component.scss']
})
export class TeacherworkshopfeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  isSubmitting = false;
  selectedLanguage = 'en';

  ratingOptions: RatingOption[] = [
    { value: 1, label: 'Poor' },
    { value: 2, label: 'Fair' },
    { value: 3, label: 'Good' },
    { value: 4, label: 'Very Good' },
    { value: 5, label: 'Excellent' }
  ];
  district: any;
  schoolid: any;

  constructor(
    private fb: FormBuilder,
    private service: CalpifService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      trainingdate: ['', Validators.required],
      teachername: ['', Validators.required],
      udiseno: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      state: ['', Validators.required],
      contactno: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      city: ['', Validators.required],
      schoolname: ['', Validators.required],

      /* OPINION QUESTIONS */
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],

      /* WORKSHOP RATINGS */
      f1b: ['', Validators.required],
      f1a: ['', Validators.required],

      /* OVERALL TRAINING */
      f2: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.feedbackForm.controls;
  }

  onUdiseChange(value: string): void {
    const udise = value ? value.trim() : '';

    if (!udise || !/^[0-9]{11}$/.test(udise)) {
      this.clearSchoolDetails();
      return;
    }

    this.service.GetSchoolDetails(udise).subscribe({
      next: (res: any) => {

        if (res && res.length > 0) {
          const school = res[0];
          
          this.schoolid = school.schoolid;
          this.district = school.district;


          this.feedbackForm.patchValue({
            schoolname: school.schoolname || '',
            city: school.city || '',
            state: school.state || '',
          });
        } else {
          alert(this.labels.invalidUdise);
          this.clearSchoolDetails();
        }
      },
      error: (error: unknown) => {
        alert(this.labels.schoolFetchError);
        this.clearSchoolDetails();
      }
    });
  }

  clearSchoolDetails(): void {
    this.feedbackForm.patchValue({
      schoolname: '',
      city: '',
      state: ''
    });
  }

  changeLanguage(): void {
    // console.log('Selected Language:', this.selectedLanguage);
  }

  get labels(): Record<string, string> {
    return this.translations[this.selectedLanguage] || this.translations['en'];
  }

  getRatingLabel(value: number): string {
    switch (value) {
      case 1:
        return this.labels.poor;
      case 2:
        return this.labels.fair;
      case 3:
        return this.labels.good;
      case 4:
        return this.labels.veryGood;
      case 5:
        return this.labels.excellent;
      default:
        return '';
    }
  }

  get opinionInvalid(): boolean {
    const fields = [
      'objectiveClear',
      'informative',
      'relevant',
      'createContent',
      'useAI'
    ];

    return fields.some(field => {
      const control = this.feedbackForm.get(field);
      return !!(control?.touched && control?.invalid);
    });
  }

  translations: TranslationDictionary = {
    en: {
      selectLanguage: 'Select Language',
      traineeDetails: 'Trainee Details',
      state: 'State',
      statePlaceholder: 'Select State',
      stateRequired: 'State is required',
      contactNo: 'Contact No.',
      contactNoPlaceholder: 'Enter 10 digit Contact No.',
      contactNoRequired: 'Valid contact number is required',
      date: 'Date',
      dateRequired: 'Date is required',
      teacherName: "Teacher's Name",
      teacherNamePlaceholder: "Enter Teacher's Name",
      teacherNameRequired: "Teacher's name is required",
      udiseNo: 'UDISE No.',
      udisePlaceholder: 'Enter 11 digit UDISE No.',
      udiseRequired: 'Valid UDISE number is required',
      location: 'Location',
      locationPlaceholder: 'Location',
      schoolName: "School's Name",
      schoolNamePlaceholder: "School's Name",
      invalidUdise: 'Invalid UDISE number or school not found.',
      schoolFetchError: 'Unable to fetch school details.',
      selectOpinion: 'Please Select Your Opinion',
      opinionInstruction: 'Please select the option that best represents your opinion.',
      questions: 'Questions',
      agreed: 'Agreed',
      disagree: 'Disagree',
      maybe: 'May be',
      objectiveClear: 'Is the objective of the workshop clear?',
      informative: 'Did you find this workshop informative?',
      relevant: 'Is this workshop session relevant to your work?',
      createContent: 'I can create academic content (worksheets, quizzes, and classroom activities) using AI tools.',
      useAI: 'I can effectively use AI tools to improve my teaching and learning materials.',
      answerAllQuestions: 'Please answer all the questions.',
      workshopFeedback: 'Workshop Feedback',
      knowledgeQuestion: 'How would you rate your knowledge and skill level in this subject before and after attending the workshop?',
      beforeWorkshop: 'Before Workshop',
      afterWorkshop: 'After Workshop',
      poor: 'Poor',
      fair: 'Fair',
      good: 'Good',
      veryGood: 'Very Good',
      excellent: 'Excellent',
      trainingEvaluation: 'How would you generally evaluate this training?',
      satisfactory: 'Satisfactory',
      unsatisfactory: 'Unsatisfactory',
      submit: 'Submit Feedback',
      submitting: 'Submitting...'
    },
    hi: {
      selectLanguage: 'भाषा चुनें',
      traineeDetails: 'प्रशिक्षु का विवरण',
      state: 'राज्य',
      statePlaceholder: 'राज्य चुनें',
      stateRequired: 'राज्य आवश्यक है',
      contactNo: 'संपर्क नंबर',
      contactNoPlaceholder: '10 अंकों का संपर्क नंबर दर्ज करें',
      contactNoRequired: 'मान्य संपर्क नंबर आवश्यक है',
      date: 'दिनांक',
      dateRequired: 'दिनांक आवश्यक है',
      teacherName: 'शिक्षक का नाम',
      teacherNamePlaceholder: 'शिक्षक का नाम दर्ज करें',
      teacherNameRequired: 'शिक्षक का नाम आवश्यक है',
      udiseNo: 'यू-डाइस नंबर',
      udisePlaceholder: '11 अंकों का यू-डाइस नंबर दर्ज करें',
      udiseRequired: 'मान्य यू-डाइस नंबर आवश्यक है',
      location: 'स्थान',
      locationPlaceholder: 'स्थान',
      schoolName: 'विद्यालय का नाम',
      schoolNamePlaceholder: 'विद्यालय का नाम',
      invalidUdise: 'अमान्य यू-डाइस नंबर या विद्यालय नहीं मिला।',
      schoolFetchError: 'विद्यालय का विवरण प्राप्त नहीं किया जा सका।',
      selectOpinion: 'कृपया अपनी राय चुनें',
      opinionInstruction: 'कृपया अपनी राय के अनुसार उपयुक्त विकल्प चुनें।',
      questions: 'प्रश्न',
      agreed: 'सहमत',
      disagree: 'असहमत',
      maybe: 'शायद',
      objectiveClear: 'क्या कार्यशाला का उद्देश्य स्पष्ट है?',
      informative: 'क्या आपको यह कार्यशाला जानकारीपूर्ण लगी?',
      relevant: 'क्या यह कार्यशाला सत्र आपके कार्य से संबंधित है?',
      createContent: 'मैं AI टूल्स का उपयोग करके शैक्षणिक सामग्री (वर्कशीट, क्विज़ और कक्षा गतिविधियाँ) बना सकता/सकती हूँ।',
      useAI: 'मैं अपने शिक्षण और सीखने की सामग्री को बेहतर बनाने के लिए AI टूल्स का प्रभावी ढंग से उपयोग कर सकता/सकती हूँ।',
      answerAllQuestions: 'कृपया सभी प्रश्नों का उत्तर दें।',
      workshopFeedback: 'कार्यशाला प्रतिक्रिया',
      knowledgeQuestion: 'कार्यशाला में भाग लेने से पहले और बाद में इस विषय में अपने ज्ञान और कौशल के स्तर का आप किस प्रकार मूल्यांकन करेंगे?',
      beforeWorkshop: 'कार्यशाला से पहले',
      afterWorkshop: 'कार्यशाला के बाद',
      poor: 'खराब',
      fair: 'सामान्य',
      good: 'अच्छा',
      veryGood: 'बहुत अच्छा',
      excellent: 'उत्कृष्ट',
      trainingEvaluation: 'आप इस प्रशिक्षण का सामान्य रूप से किस प्रकार मूल्यांकन करेंगे?',
      satisfactory: 'संतोषजनक',
      unsatisfactory: 'असंतोषजनक',
      submit: 'प्रतिक्रिया जमा करें',
      submitting: 'जमा किया जा रहा है...'
    },
    mr: {
      selectLanguage: 'भाषा निवडा',
      traineeDetails: 'प्रशिक्षणार्थीचा तपशील',
      state: 'राज्य',
      statePlaceholder: 'राज्य निवडा',
      stateRequired: 'राज्य आवश्यक आहे',
      contactNo: 'संपर्क क्रमांक',
      contactNoPlaceholder: '10 अंकी संपर्क क्रमांक प्रविष्ट करा',
      contactNoRequired: 'वैध संपर्क क्रमांक आवश्यक आहे',
      date: 'दिनांक',
      dateRequired: 'दिनांक आवश्यक आहे',
      teacherName: 'शिक्षकाचे नाव',
      teacherNamePlaceholder: 'शिक्षकाचे नाव प्रविष्ट करा',
      teacherNameRequired: 'शिक्षकाचे नाव आवश्यक आहे',
      udiseNo: 'यू-डाइस क्रमांक',
      udisePlaceholder: '11 अंकी यू-डाइस क्रमांक प्रविष्ट करा',
      udiseRequired: 'वैध यू-डाइस क्रमांक आवश्यक आहे',
      location: 'ठिकाण',
      locationPlaceholder: 'ठिकाण',
      schoolName: 'शाळेचे नाव',
      schoolNamePlaceholder: 'शाळेचे नाव',
      invalidUdise: 'अवैध यू-डाइस क्रमांक किंवा शाळा सापडली नाही.',
      schoolFetchError: 'शाळेचा तपशील मिळवता आला नाही.',
      selectOpinion: 'कृपया आपले मत निवडा',
      opinionInstruction: 'आपल्या मतानुसार योग्य पर्याय निवडा.',
      questions: 'प्रश्न',
      agreed: 'सहमत',
      disagree: 'असहमत',
      maybe: 'कदाचित',
      objectiveClear: 'कार्यशाळेचे उद्दिष्ट स्पष्ट आहे का?',
      informative: 'ही कार्यशाळा तुम्हाला माहितीपूर्ण वाटली का?',
      relevant: 'हे कार्यशाळा सत्र तुमच्या कामाशी संबंधित आहे का?',
      createContent: 'मी AI साधनांचा वापर करून शैक्षणिक सामग्री (वर्कशीट, क्विझ आणि वर्गातील उपक्रम) तयार करू शकतो/शकते.',
      useAI: 'माझे अध्यापन आणि अध्ययन साहित्य सुधारण्यासाठी मी AI साधनांचा प्रभावीपणे वापर करू शकतो/शकते.',
      answerAllQuestions: 'कृपया सर्व प्रश्नांची उत्तरे द्या.',
      workshopFeedback: 'कार्यशाला अभिप्राय',
      knowledgeQuestion: 'कार्यशाळेत सहभागी होण्यापूर्वी आणि नंतर या विषयातील तुमच्या ज्ञान आणि कौशल्याच्या पातळीचे तुम्ही कसे मूल्यांकन कराल?',
      beforeWorkshop: 'कार्यशाळेपूर्वी',
      afterWorkshop: 'कार्यशाळेनंतर',
      poor: 'खराब',
      fair: 'समाधानकारक',
      good: 'चांगले',
      veryGood: 'खूप चांगले',
      excellent: 'उत्कृष्ट',
      trainingEvaluation: 'तुम्ही या प्रशिक्षणाचे एकूण मूल्यांकन कसे कराल?',
      satisfactory: 'समाधानकारक',
      unsatisfactory: 'असमाधानकारक',
      submit: 'अभिप्राय सादर करा',
      submitting: 'सादर करत आहे...'
    }
  };

  submitFeedback(): void {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    
    const formData = { 
      ...this.feedbackForm.value,
      schoolid: this.schoolid,
      district: this.district
     };     

    this.service.AddTeachersWorkshopFeedback(formData).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;

        // Handle custom success flag from 200 OK response
        if (res && res.success) {
          alert(res.message || 'Feedback saved successfully.');
          this.feedbackForm.reset();
          this.router.navigate(['/login']);
        } else {
          // Handles duplicate contact number or validation responses
          alert(res.message || 'Submission failed. Please check your data.');
        }
      },
      error: (error: unknown) => {
        this.isSubmitting = false;
        alert('A server error occurred while submitting feedback. Please try again.');
      }
    });
  }
}