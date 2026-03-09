import { Component, OnInit, EventEmitter, ElementRef, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { CalpifService } from 'src/app/shared/services/calpif.service';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  programid;
  UserId;
  UserValues;
  coursename;
  language;
  time;
  Beginner;
  Basic;
  Intermediate;
  Advance;
  totalquestion;
  currentIndex = 0;
  currentQuestionSet: any;
  questions;
  AddCourseForm: FormGroup;
  obj = {};
  totmarks = 0;
  totalmark;
  loading = true;
  cq;
  begcounter: number = 1;
  bscounter: number = 1;
  intcounter: number = 1;
  advcounter: number = 1;
  FinalGrade;
  begsum = 0;
  bssum = 0;
  intsum = 0;
  advsum = 0;
  timer;
  progresscolor = 'rgb(72, 221, 13)';
  public progress = 100;
  @ViewChild('time') callDuration: ElementRef;
  setid;
  Reexam;
  routesetid;
  totalqlevelwise;
  beginnertarget
  basictarget;
  intertarget;
  advtarget;
  audio;
  btn = true;
  loaded;
  TotalMarks;
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  facingMode: string = 'user';  //Set front camera
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
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  constructor(private router: Router, private service: CalpifService, private fb: FormBuilder, public route: ActivatedRoute) {
    this.routesetid = route.snapshot.params["id"];
    this.programid = localStorage.getItem('Programid');
    this.UserId = localStorage.getItem('UserId');
    this.UserValues = JSON.parse(sessionStorage.getItem('Uservalue'));
    this.Reexam = sessionStorage.getItem('Reexam');
    this.coursename = JSON.parse(sessionStorage.getItem('coursename'));
    this.language = this.UserValues.language;
    this.time = this.UserValues.totalmin;
    this.TotalMarks = Number(localStorage.getItem('TotalMarks'));

    this.cq = (localStorage.getItem("cq") == null) ? null : localStorage.getItem("cq");
    this.obj = (localStorage.getItem("obj") == null) ? {} : JSON.parse(localStorage.getItem("obj"));
    if (this.routesetid != undefined || this.routesetid != null) {
      if (this.cq == null) {
        this.service.GetExam(this.coursename, this.language, this.UserId).subscribe((data: any) => {
          this.questions = data;

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
        })
      }
      else {

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
        })
      }
      else {
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
    if (this.audio != undefined) {
      this.audio.pause();

    }
    if (this.currentIndex == this.totalquestion - 1) {
      this.currentIndex = this.currentIndex
    }
    else {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestionSet = this.questions[this.currentIndex];
    }
    localStorage.setItem('cq', this.currentIndex.toString())

    if (ans == QuestionSet.rightanswer) {
      this.obj["q" + (index)] = 1;
      let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
      localStorage.setItem("result", result.toString())
    }
    else {
      this.obj["q" + (index)] = 0;
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
  Beginnerlevel(index, ans, QuestionSet) {
    if (this.begcounter == this.Beginner) {

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.begsum = this.begsum + 1;
      }
      else {
        this.obj["q" + (index)] = 0;
      }

      // var summed = this.sum(this.obj);
      var summed = this.begsum
      if (summed < this.beginnertarget) {
        this.Submit();

      }
      else {
        if (this.currentIndex == this.totalquestion - 1) {
          this.currentIndex = this.currentIndex
        }
        else {
          this.currentIndex = this.currentIndex + 1;
          this.currentQuestionSet = this.questions[this.currentIndex];

        }
        this.totalqlevelwise = this.totalqlevelwise + this.Basic;

        localStorage.setItem('cq', this.currentIndex.toString())


      }

    }
    else {
      if (this.currentIndex == this.totalquestion - 1) {
        this.currentIndex = this.currentIndex
      }
      else {
        this.currentIndex = this.currentIndex + 1;
        this.currentQuestionSet = this.questions[this.currentIndex];

      }
      localStorage.setItem('cq', this.currentIndex.toString())

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.begsum = this.begsum + 1;


      }
      else {
        this.obj["q" + (index)] = 0;
      }
      ++this.begcounter;

    }
    localStorage.setItem("totalqlevelwise", this.totalqlevelwise.toString());
    localStorage.setItem("obj", JSON.stringify(this.obj))
    localStorage.setItem("BeginnerSum", this.begsum.toString());
    localStorage.setItem("BeginnerCounter", this.begcounter.toString());
  }
  sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }
  Basiclevel(index, ans, QuestionSet) {
    if (this.bscounter == this.Basic) {

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.bssum = this.bssum + 1

      }
      else {
        this.obj["q" + (index)] = 0;
      }

      // var summed = this.sum(this.obj);
      var summed = this.bssum
      if (summed < this.basictarget) {
        this.Submit();
        // alert("exam over ");
      }
      else {
        if (this.currentIndex == this.totalquestion - 1) {
          this.currentIndex = this.currentIndex
        }
        else {
          this.currentIndex = this.currentIndex + 1;
          this.currentQuestionSet = this.questions[this.currentIndex];

        }
        this.totalqlevelwise = this.totalqlevelwise + this.Intermediate;
        localStorage.setItem('cq', this.currentIndex.toString())

      }

    }
    else {
      if (this.currentIndex == this.totalquestion - 1) {
        this.currentIndex = this.currentIndex
      }
      else {
        this.currentIndex = this.currentIndex + 1;
        this.currentQuestionSet = this.questions[this.currentIndex];

      }
      localStorage.setItem('cq', this.currentIndex.toString())

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.bssum = this.bssum + 1

      }
      else {
        this.obj["q" + (index)] = 0;
      }

      ++this.bscounter;

    }
    localStorage.setItem("totalqlevelwise", this.totalqlevelwise.toString());
    localStorage.setItem("obj", JSON.stringify(this.obj));
    localStorage.setItem("BasicSum", this.bssum.toString());
    localStorage.setItem("BasicCounter", this.bscounter.toString());
  }
  Intermediatelevel(index, ans, QuestionSet) {
    if (this.intcounter == this.Intermediate) {

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.intsum = this.intsum + 1

      }
      else {
        this.obj["q" + (index)] = 0;
      }

      // var summed = this.sum(this.obj);
      var summed = this.intsum
      if (summed < this.intertarget) {
        this.Submit();
        // alert("exam over ");
      }
      else {
        if (this.currentIndex == this.totalquestion - 1) {
          this.currentIndex = this.currentIndex
        }
        else {
          this.currentIndex = this.currentIndex + 1;
          this.currentQuestionSet = this.questions[this.currentIndex];

        }
        this.totalqlevelwise = this.totalqlevelwise + this.Advance;
        localStorage.setItem('cq', this.currentIndex.toString())
      }
    }
    else {
      if (this.currentIndex == this.totalquestion - 1) {
        this.currentIndex = this.currentIndex
      }
      else {
        this.currentIndex = this.currentIndex + 1;
        this.currentQuestionSet = this.questions[this.currentIndex];

      }
      localStorage.setItem('cq', this.currentIndex.toString())

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.intsum = this.intsum + 1

      }
      else {
        this.obj["q" + (index)] = 0;
      }

      ++this.intcounter;

    }
    localStorage.setItem("totalqlevelwise", this.totalqlevelwise.toString());
    localStorage.setItem("obj", JSON.stringify(this.obj));
    localStorage.setItem("BasicSum", this.bssum.toString());
    localStorage.setItem("BasicCounter", this.bscounter.toString());
    localStorage.setItem("Intermediatecounter", this.intcounter.toString());
  }
  Advancelevel(index, ans, QuestionSet) {
    if (this.advcounter == this.Advance) {

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.advsum = this.advsum + 1

      }
      else {
        this.obj["q" + (index)] = 0;
      }

      // var summed = this.sum(this.obj);
      var summed = this.advsum
      if (summed < this.advtarget) {

        // alert("exam over ");
      }
      else {
        if (this.currentIndex == this.totalquestion - 1) {
          this.currentIndex = this.currentIndex
        }
        else {
          this.currentIndex = this.currentIndex + 1;
          this.currentQuestionSet = this.questions[this.currentIndex];

        }
        localStorage.setItem('cq', this.currentIndex.toString())

      }

    }
    else {
      if (this.currentIndex == this.totalquestion - 1) {
        this.currentIndex = this.currentIndex
      }
      else {
        this.currentIndex = this.currentIndex + 1;
        this.currentQuestionSet = this.questions[this.currentIndex];

      }
      localStorage.setItem('cq', this.currentIndex.toString())

      if (ans == QuestionSet.rightanswer) {
        this.obj["q" + (index)] = 1;
        let result = (localStorage.getItem("result") == null) ? 1 : parseInt(localStorage.getItem("result")) + 1
        localStorage.setItem("result", result.toString());
        this.advsum = this.advsum + 1

      }
      else {
        this.obj["q" + (index)] = 0;
      }

      ++this.advcounter;

    }
    localStorage.setItem("totalqlevelwise", this.totalqlevelwise.toString());
    localStorage.setItem("obj", JSON.stringify(this.obj));
    localStorage.setItem("BasicSum", this.bssum.toString());
    localStorage.setItem("BasicCounter", this.bscounter.toString());
    localStorage.setItem("Intermediatecounter", this.intcounter.toString());
    localStorage.setItem("Advancecounter", this.advcounter.toString());
  }


  Submit() {

    this.loading = true;
    var total = this.sum(this.obj);
    var totquestion = Object.keys(this.obj).length;

    this.coursename = JSON.parse(sessionStorage.getItem('coursename'));

    if (this.coursename == 'STD 1 - Kerala Baseline 2025-26' || this.coursename == 'STD 2 - Kerala Baseline 2025-26' || this.coursename == 'STD 3 - Kerala Baseline 2025-26' || this.coursename == 'STD 4 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Kerala Baseline 2025-26' || this.coursename == 'STD 6 - Kerala Baseline 2025-26' || this.coursename == 'STD 7 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Baseline 2025-26' || this.coursename == 'STD 6 - Baseline 2025-26' || this.coursename == 'STD 7 - Baseline 2025-26' || this.coursename == 'STD 8 - Baseline 2025-26' || this.coursename == 'STD 9 - Baseline 2025-26' || this.coursename == 'STD 10 - Baseline 2025-26' || this.coursename == 'STD 11 - Baseline 2025-26' || this.coursename == 'STD 12 - Baseline 2025-26' || this.coursename == 'STD 12 - Baseline 2025-26 (Old)' || this.coursename == 'STD 9 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 10 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 11 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 12 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 5 - Midline 2025-26' || this.coursename == 'STD 6 - Midline 2025-26' || this.coursename == 'STD 7 - Midline 2025-26' || this.coursename == 'STD 8 - Midline 2025-26' || this.coursename == 'STD 9 - Midline 2025-26' || this.coursename == 'STD 11 - Midline 2025-26' || this.coursename == 'STD 9 - Gujarati - Midline 2025-26' || this.coursename == 'STD 11 - Gujarati - Midline 2025-26' || this.coursename == 'STD 5 - Endline 2025-26' || this.coursename == 'STD 6 - Endline 2025-26' || this.coursename == 'STD 7 - Endline 2025-26' || this.coursename == 'STD 8 - Endline 2025-26' || this.coursename == 'STD 9 - Endline 2025-26' || this.coursename == 'STD 10 - Endline 2025-26' || this.coursename == 'STD 11 - Endline 2025-26' || this.coursename == 'STD 12 - Endline 2025-26' || this.coursename == 'STD 9 - Gujarati - Endline 2025-26' || this.coursename == 'STD 10 - Gujarati - Endline 2025-26' || this.coursename == 'STD 11 - Gujarati - Endline 2025-26' || this.coursename == 'STD 12 - Gujarati - Endline 2025-26') {
      this.TotalMarks = 32;
    }
    else if (this.coursename == "Introduction to Artificial Intelligence" || this.coursename == "Introduction to Generative Artificial Intelligence") {
      this.TotalMarks = 20;
    }
    else {
      this.TotalMarks = this.UserValues.totalmarks;
    }

    var percentage = total / this.TotalMarks * 100;

    if (this.coursename == 'STD 1 - Kerala Baseline 2025-26' || this.coursename == 'STD 2 - Kerala Baseline 2025-26' || this.coursename == 'STD 3 - Kerala Baseline 2025-26' || this.coursename == 'STD 4 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Kerala Baseline 2025-26' || this.coursename == 'STD 6 - Kerala Baseline 2025-26' || this.coursename == 'STD 7 - Kerala Baseline 2025-26' || this.coursename == 'STD 5 - Baseline 2025-26' || this.coursename == 'STD 6 - Baseline 2025-26' || this.coursename == 'STD 7 - Baseline 2025-26' || this.coursename == 'STD 8 - Baseline 2025-26' || this.coursename == 'STD 9 - Baseline 2025-26' || this.coursename == 'STD 10 - Baseline 2025-26' || this.coursename == 'STD 11 - Baseline 2025-26' || this.coursename == 'STD 12 - Baseline 2025-26' || this.coursename == 'STD 12 - Baseline 2025-26 (Old)' || this.coursename == 'STD 9 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 10 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 11 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 12 - Gujarati - Baseline 2025-26' || this.coursename == 'STD 5 - Midline 2025-26' || this.coursename == 'STD 6 - Midline 2025-26' || this.coursename == 'STD 7 - Midline 2025-26' || this.coursename == 'STD 8 - Midline 2025-26' || this.coursename == 'STD 9 - Midline 2025-26' || this.coursename == 'STD 11 - Midline 2025-26' || this.coursename == 'STD 9 - Gujarati - Midline 2025-26' || this.coursename == 'STD 11 - Gujarati - Midline 2025-26' || this.coursename == 'STD 5 - Endline 2025-26' || this.coursename == 'STD 6 - Endline 2025-26' || this.coursename == 'STD 7 - Endline 2025-26' || this.coursename == 'STD 8 - Endline 2025-26' || this.coursename == 'STD 9 - Endline 2025-26' || this.coursename == 'STD 10 - Endline 2025-26' || this.coursename == 'STD 11 - Endline 2025-26' || this.coursename == 'STD 12 - Endline 2025-26' || this.coursename == 'STD 9 - Gujarati - Endline 2025-26' || this.coursename == 'STD 10 - Gujarati - Endline 2025-26' || this.coursename == 'STD 11 - Gujarati - Endline 2025-26' || this.coursename == 'STD 12 - Gujarati - Endline 2025-26') {
      if (percentage >= 61 && percentage <= 100) {
        this.FinalGrade = "A";
      }
      if (percentage >= 41 && percentage < 61) {
        this.FinalGrade = "B";
      }
      if (percentage >= 26 && percentage < 41) {
        this.FinalGrade = "C";
      }
      if (percentage >= 1 && percentage < 26) {
        this.FinalGrade = "D";
      }
      if (percentage == 0) {
        this.FinalGrade = "E";
      }
    }
    else {
      if (percentage >= 76 && percentage <= 100) {
        this.FinalGrade = "A";
      }
      if (percentage >= 51 && percentage < 76) {
        this.FinalGrade = "B";
      }
      if (percentage >= 35 && percentage < 51) {
        this.FinalGrade = "C";
      }
      if (percentage >= 21 && percentage < 35) {
        this.FinalGrade = "D";
      }
      if (percentage >= 0 && percentage < 21) {
        this.FinalGrade = "E";
      }
    }

    this.obj['totalmark'] = total;
    this.obj['totquestion'] = this.TotalMarks;

    this.obj['percentage'] = percentage;
    this.obj['grade'] = this.FinalGrade;
    sessionStorage.setItem('ExamResult', JSON.stringify(this.obj));
    sessionStorage.setItem('SetID', JSON.stringify(this.setid));
    sessionStorage.setItem('UserID', JSON.stringify(this.UserId));

    this.service.InsertUserExam(this.coursename, this.language, this.UserId, this.setid, this.obj).subscribe((res: any) => {
      if (res == 'Success') {
        localStorage.removeItem("cq");
        localStorage.removeItem("qdata");
        localStorage.removeItem("result");
        localStorage.removeItem("obj");
        localStorage.removeItem("timer");
        localStorage.removeItem("BeginnerCounter");
        localStorage.removeItem("BasicCounter");
        localStorage.removeItem("BeginnerSum");
        localStorage.removeItem("BasicSum");
        this.loading = false;
        this.router.navigate(['/CALPIFResult', this.setid]);
      }

    })


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
        exit = true;
        return
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
        this.router.navigate(['/CALPIFResult', this.setid]);
        exit = true;
        return
      }

    })

    if (exit) {
      return
    }
  }

  play(audiosrc) {
    this.btn = false;

    this.audio = new Audio("http://dsexam.digitalsakshar.com/Image/" + audiosrc + "");
    this.audio.play();
  }
  Pause() {
    this.btn = true;
    this.audio.pause();

  }
}