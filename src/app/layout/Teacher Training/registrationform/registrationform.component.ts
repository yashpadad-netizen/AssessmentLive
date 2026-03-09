import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  teacherForm: FormGroup;
  schoolData;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private service: CalpifService, private router: Router) { }

  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      teachername: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],

      schoolname: ['', Validators.required],
      udiseno: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],

      teacherdesignation: ['', Validators.required],
      // qualification: ['', Validators.required],

      trainingdate: ['', Validators.required],
      trainingtime: ['', Validators.required],
      trainingvenue: ['', Validators.required]
    });
  }

  submitForm() {

    if (this.teacherForm.valid) {
      this.isSubmitting = true;

      this.service.TeacherRegistration(this.teacherForm.value)
        .subscribe(
          (res) => {
            if (res == 'Teacher registered successfully') {
              this.isSubmitting = false;
              alert('Teacher Registered Successfully');
              this.teacherForm.reset();
              this.router.navigate(["/login"]);
            }
            else {
              alert('Registration failed');
            }
          });
    }
  }

  get f() {
    return this.teacherForm.controls;
  }
}
