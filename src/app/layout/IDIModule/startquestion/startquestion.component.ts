import { Component, OnInit, EventEmitter, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/shared/services/assessment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { interval } from 'rxjs';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-startquestion',
  templateUrl: './startquestion.component.html',
  styleUrls: ['./startquestion.component.scss']
})
export class StartquestionComponent implements OnInit {
  examid;
  userid;
  exam;

  AddCourseForm: FormGroup;
  submited = new EventEmitter<string>();
  loaded
  questions: any;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start = false;
  gameover = false;
  buttonname = "Play";
  a1;
  currentIndex = 0;
  time: number;
  sec
  public progress = 100;
  refresh;
  progresscolor = 'rgb(72, 221, 13)';
  euserid;
  CompentencyMarksUser

  timer

  loading = true;
  totalquestion;
  programid;
  UserId;
  UserValues;
  coursename;
  language;
  obj = {};
  totmarks = 0;
  totalmark;
  FinalGrade;
  cq;
  setid;
  routesetid
  @ViewChild('time') callDuration: ElementRef;
  facingMode: string = 'user';
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;
  allowCameraSwitch = false;
  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = { ideal: this.facingMode };
    }
    return result;
  }
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  constructor(private router: Router, private service: AssessmentService, private elementRef: ElementRef, private route: ActivatedRoute, private fb: FormBuilder, private service1: CalpifService) {
    this.routesetid = route.snapshot.params["id"];
    this.programid = localStorage.getItem('Programid');
    this.UserId = localStorage.getItem('UserId');
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));

    this.coursename = this.UserValues.coursename;
    this.language = this.UserValues.language;
    this.time = this.UserValues.totalmin;

    this.cq = (localStorage.getItem("cq") == null) ? null : localStorage.getItem("cq");
    this.obj = (localStorage.getItem("obj") == null) ? {} : JSON.parse(localStorage.getItem("obj"));
    if (this.routesetid != undefined || this.routesetid != null) {
      console.log(this.cq);

      if (this.cq == null) {
        this.service.GetExamnew(this.coursename, this.language, this.UserId).subscribe((data: any) => {

          this.questions = data;
          // console.log(data);

          localStorage.removeItem("qdata")
          localStorage.setItem("qdata", JSON.stringify(data));
          this.totalquestion = data.length;
          this.setid = this.questions[0].setid;
          this.currentIndex = 0;
          this.currentQuestionSet = this.questions[this.currentIndex];
          this.timer = null;
          localStorage.removeItem("timer")
          this.startTimer();
          localStorage.setItem("cq", "1");
          this.loading = false;

        });
      } else {
        localStorage.removeItem("qdata")
        this.questions = JSON.parse(localStorage.getItem("qdata"))
        this.totalquestion = this.questions.length;
        this.setid = this.questions[0].setid;
        this.currentIndex = parseInt(localStorage.getItem("cq"));
        this.currentQuestionSet = this.questions[this.currentIndex];
        this.startTimer();
        this.loading = false;

      }
    }
    else {
      if (this.cq == null) {
        this.service.GetReExam(this.coursename, this.language, this.UserId, this.routesetid).subscribe((data: any) => {

          this.questions = data;
          // console.log(JSON.stringify(data))
          localStorage.removeItem("qdata")
          localStorage.setItem("qdata", JSON.stringify(data));
          this.totalquestion = data.length;
          this.setid = this.questions[0].setid;
          this.currentIndex = 0;
          this.currentQuestionSet = this.questions[this.currentIndex];
          this.timer = null;
          localStorage.removeItem("timer")
          this.startTimer();
          localStorage.setItem("cq", "1");
          this.loading = false;

        });
      } else {
        localStorage.removeItem("qdata")
        this.questions = JSON.parse(localStorage.getItem("qdata"))
        this.totalquestion = this.questions.length;
        this.setid = this.questions[0].setid;
        this.currentIndex = parseInt(localStorage.getItem("cq"));
        this.currentQuestionSet = this.questions[this.currentIndex];
        localStorage.removeItem("timer")
        this.startTimer();
        this.loading = false;

      }
    }
  }

  next(index, ans, QuestionSet) {

    localStorage.removeItem("cq")
    localStorage.removeItem("qdata")

    if (this.currentIndex == this.totalquestion - 1) {
      this.currentIndex = this.currentIndex
    }
    else {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet = this.questions[this.currentIndex];
    }
    localStorage.setItem('cq', this.currentIndex.toString())

    if (this.coursename == 'Happiness Literacy Standard 5 to 7' || this.coursename == 'Happiness Literacy Standard 8 and Above') {
      this.obj["q" + (index)] = ans;
      this.obj["rightq" + (index)] = QuestionSet.rightanswer;
    }
    else {
      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString())
      }
      else {
        this.obj["q" + (index)] = 0;
      }
    }
    this.totalmark = this.totmarks


    if (index == this.totalquestion) {
      this.Submit()
    }
    localStorage.setItem("obj", JSON.stringify(this.obj))
  }
  ngOnInit() {
    this.AddCourseForm = this.fb.group({
      answer: ['', Validators.required],
    }
    );

  }
  Submit() {
    this.loading = true;
    var total = localStorage.getItem("result")
    var percentage = parseInt(total) / this.totalquestion * 100;

    if (percentage >= 76 && percentage <= 100) {
      this.FinalGrade = "A"
    }
    if (percentage >= 51 && percentage < 76) {
      this.FinalGrade = "B"
    }
    if (percentage >= 35 && percentage < 51) {
      this.FinalGrade = "C"
    }
    if (percentage >= 21 && percentage < 35) {
      this.FinalGrade = "D"
    }
    if (percentage >= 0 && percentage < 21) {
      this.FinalGrade = "E"
    }
    this.obj['totalmark'] = total;
    this.obj['percentage'] = percentage;
    this.obj['grade'] = this.FinalGrade;
    sessionStorage.setItem('ExamResult', JSON.stringify(this.obj));

    if (this.coursename == 'Pre-Placement Guidance Session (Pre-Test) 2025-26' || this.coursename == 'Pre-Placement Guidance Session (Post-Test) 2025-26') {
      this.obj['studentid'] = this.UserValues.username;
      this.obj['studentname'] = this.UserValues.fullname;
      this.obj['testtype'] = this.coursename;
      this.obj['totmarks'] = this.totalquestion;
      this.obj['language'] = this.language;

      this.service1.InsertPrePlacementGuidance(this.UserId, this.obj).subscribe((res: any) => {
        if (res == 'Success') {
          localStorage.removeItem("cq");
          localStorage.removeItem("qdata");
          localStorage.removeItem("result");
          localStorage.removeItem("obj");
          localStorage.removeItem("timer");
          this.loading = false;
          this.router.navigate(['/ExamResult', this.setid]);
        }
        else if (res == 'Exists') {
          this.loading = false;
          alert("Exam Already Given!");
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }

      })
    }
    else if (this.coursename == 'Teacher Training (Pre) 2025-26' || this.coursename == 'Teacher Training (Post) 2025-26') {
      this.obj['type'] = this.coursename;
      this.obj['outof'] = this.totalquestion;
      this.obj['language'] = this.language;

      this.service1.InsertTeacherTrainingLMS(this.UserValues.username, this.obj).subscribe((res: any) => {
        if (res == 'Success') {
          localStorage.removeItem("cq");
          localStorage.removeItem("qdata");
          localStorage.removeItem("result");
          localStorage.removeItem("obj");
          localStorage.removeItem("timer");
          this.loading = false;
          this.router.navigate(['/ExamResult', this.setid]);
        }
        else if (res == 'Exists') {
          this.loading = false;
          alert("Exam Already Given!");
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }

      })
    }
    else if (this.coursename == 'Happiness Literacy Standard 5 to 7' || this.coursename == 'Happiness Literacy Standard 8 and Above') {
      this.obj['outof'] = this.totalquestion;
      this.obj['language'] = this.language;
      this.obj['examtype'] = this.coursename;

      this.service1.AddHappinessAssessment(this.UserValues.username, this.obj).subscribe((res: any) => {
        if(res){
          localStorage.removeItem("cq");
          localStorage.removeItem("qdata");
          localStorage.removeItem("result");
          localStorage.removeItem("obj");
          localStorage.removeItem("timer");

          this.obj['totalmark'] = res.totalmark;
          this.obj['percentage'] = res.percentage;
          this.obj['grade'] = res.grade;
          sessionStorage.setItem('ExamResult', JSON.stringify(this.obj));
          this.loading = false;
          this.router.navigate(['/ExamResult', this.setid]);
        }
        else{
          this.loading = false;
          alert("Exam Already Given!");
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }

        // if (res == 'success') {
        //   localStorage.removeItem("cq");
        //   localStorage.removeItem("qdata");
        //   localStorage.removeItem("result");
        //   localStorage.removeItem("obj");
        //   localStorage.removeItem("timer");
        //   this.loading = false;
        //   this.router.navigate(['/ExamResult', this.setid]);
        // }
        // else if (res == 'Exists') {
        //   this.loading = false;
        //   alert("Exam Already Given!");
        //   localStorage.clear();
        //   sessionStorage.clear();
        //   this.router.navigate(['/login']);
        // }

      })
    }
    else {
      this.service.InsertUserExam(this.coursename, this.language, this.UserId, this.setid, this.obj).subscribe((res: any) => {
        if (res == 'Success') {
          localStorage.removeItem("cq");
          localStorage.removeItem("qdata");
          localStorage.removeItem("result");
          localStorage.removeItem("obj");
          localStorage.removeItem("timer");
          this.loading = false;
          this.router.navigate(['/ExamResult', this.setid]);
        }

      })

    }

  }
  submit() {
    console.log('submitted');
  }
  startTimer() {
    this.timer = (this.time * 60);

    var deadline = (this.timer / 100) * 20;

    var minutes;
    var seconds;
    var progesscount = 100 / this.timer;
    var exit = false;
    this.timer = (localStorage.getItem("timer") == null) ? this.timer : localStorage.getItem("timer");
    interval(1000).subscribe(x => {
      localStorage.setItem("timer", this.timer)
      minutes = Math.floor(this.timer / 60);
      seconds = Math.floor(this.timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.callDuration.nativeElement.innerHTML = minutes + ":" + seconds;
      if (this.timer == -3) {
        localStorage.removeItem("timer")
        exit = true;
        return;
      }

      --this.timer;

      this.progress -= progesscount;

      if (this.timer < deadline) {
        this.progresscolor = 'red';

      }
      else {
        this.progresscolor = 'rgb(72, 221, 13)';

      }
      if (this.timer == -2) {
        this.Submit()
        alert('timeup');
        localStorage.removeItem("timer")
        this.router.navigate(['/ExamResult']);
        exit = true;
        return
      }

    })
    if (exit) {
      return
    }
  }


}