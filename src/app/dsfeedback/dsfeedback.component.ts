import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../shared/services/assessment.service';
export class feedback {
  public q1: string = '';
  public q2: string = '';
  public q3: string = '';
  public q4: string = '';
  public q5: string = '';
  public q6: string = '';
  public q7: string = '';
  public q8: string = ''; 
  public studentid: string = '';
  public examid: string = '';


}
@Component({
  selector: 'app-dsfeedback',
  templateUrl: './dsfeedback.component.html',
  styleUrls: ['./dsfeedback.component.scss']
})
export class DsfeedbackComponent implements OnInit {
  langugae = 'Select Language';
  q1 = 'Placement assistance by Pratham';
  q2 = 'Assignments given during the cours';
  q3 = 'Personality development sessions';
  q4 = 'Counselings provided';
  q5 = 'Syllabus covered during the course';
  q6 = 'Teaching by computer teacher';
  q7 = 'Overall course rating ';
  q8 = 'Volunteering by LTI volunteers'
  FeedbackForm: FormGroup;
  studid;
  examid;
  euserid;
  type;
  namelist
  contactno;
  stname;
  nullmsg;
  userid
  constructor(private service: AssessmentService, private router: Router,private fb: FormBuilder,private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.FeedbackForm = this.fb.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],


    }
    );
  }
  
  SelectLanguage(value) {
    if (value == 'Hindi') {
      this.langugae = 'भाषा का चयन करें';

      this.q1 = 'प्रथम द्वारा रोजगार दिलानेमें कि गयी मदत';
      this.q2 = 'कोर्स के दौरान दिए गए असाइन्मेण्ट';
      this.q3 = 'व्यक्तित्व विकास के सत्र';
      this.q4 = 'काउन्सलिंग ';
      this.q5 = 'कोर्स के दौरान कवर किया गया पाठ्यक्रम';
      this.q6 = ' कंप्यूटर शिक्षक द्वारा दिया गया प्रशिक्षण';
      this.q7 = 'समग्र में कोर्स कैसे लगा?';
      this.q8 = 'एलटीआय  के स्वयंसेवकोद्वारा मार्गदर्शन'
    }
    else {
      this.langugae = 'Select Language';

      this.q1 = 'Placement assistance by Pratham';
      this.q2 = 'Assignments given during the cours';
      this.q3 = 'Personality development sessions';
      this.q4 = 'Counselings provided';
      this.q5 = 'Syllabus covered during the course';
      this.q6 = 'Teaching by computer teacher';
      this.q7 = 'Overall course rating ';
      this.q8 = 'Volunteering by LTI volunteers'
    }
  }

  Serachdata(userid){
    if(userid != undefined){
      this.service.FillDropDownj("student", "distinct student.firstname+' '+student.surname", "studentid", " where studentid='"+userid+"'").subscribe((data: any) => { this.namelist = data; 
        this.stname=this.namelist[0].column1;  
        this.studid =userid
      })
      this.service.FillDropDownj("student", "distinct student.contactno", "contactno", " where studentid='"+userid+"'").subscribe((data: any) => { this.contactno = data[0].column1;  })
      this.nullmsg = null;
    }
    else{
      this.nullmsg = 'Enter Student Id';

    }
   }
   onSubmit() {
    const data: feedback = new feedback();
    data.q1 = this.FeedbackForm.value.q1;
    data.q2 = this.FeedbackForm.value.q2
    data.q3 = this.FeedbackForm.value.q3
    data.q4 = this.FeedbackForm.value.q4
    data.q5 = this.FeedbackForm.value.q5
    data.q6 = this.FeedbackForm.value.q6
    data.q7 = this.FeedbackForm.value.q7
    data.q8 = this.FeedbackForm.value.q8;
    data.studentid = this.studid;
     
    this.service.AddDigitalSaksharFeedback(data).subscribe((res) => {
          
          if(res == 'Sucess'){
            alert("Feedback submitted successfully");
            this.contactno = null;
          }
          else if(res == 'Exist'){
            alert("Data Already Exist"); 
            this.contactno = null;
          }
          else  {
            alert("Failed To Sumbit Data"  ); 
            this.contactno = null;
          }
    })
    
  }
 
}
