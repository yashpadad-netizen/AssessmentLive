import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-youthtrainingregistration',
  templateUrl: './youthtrainingregistration.component.html',
  styleUrls: ['./youthtrainingregistration.component.scss']
})
export class YouthtrainingregistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitting = false;
  centerId: string;
  empId: string;

  readonly qualificationOptions = [
    'Below Secondary (Below 10th)',
    'Secondary (10th Pass)',
    'Higher Secondary (12th Pass)',
    'Diploma',
    'Undergraduate (Graduation)',
    'Postgraduate (Post Graduation)',
    'Doctorate (Ph.D.)'
  ];

  constructor(
    private fb: FormBuilder,
    private service: CalpifService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.centerId = this.route.snapshot.params['id'];

    this.registrationForm = this.fb.group({
      centname: ['', Validators.required],
      state: ['', Validators.required],
      location: ['', Validators.required],
      studentname: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      dob: ['', Validators.required],
      age: [{ value: '', disabled: true }, Validators.required],
      qualification: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loadCenterDetails();
  }

  loadCenterDetails(): void {
    if (!this.centerId) {
      return;
    }

    this.service.FillDropDown('Center', 'centname', 'centid', "where centid = '" + this.centerId + "'")
      .subscribe((res: any) => {
        this.registrationForm.patchValue({
          centname: res?.[0]?.column1 || ''
        });
      });

    this.service.FillDropDown('Center', 'state', 'state', "where centid = '" + this.centerId + "'")
      .subscribe((res: any) => {
        this.registrationForm.patchValue({
          state: res?.[0]?.column1 || ''
        });
      });

    this.service.FillDropDown('Center', 'city', 'city', "where centid = '" + this.centerId + "'")
      .subscribe((res: any) => {
        this.registrationForm.patchValue({
          location: res?.[0]?.column1 || ''
        });
      });
  }

  onDateOfBirthChange(): void {
    const dateOfBirth = this.registrationForm.get('dob')?.value;

    if (!dateOfBirth) {
      this.registrationForm.get('age')?.setValue('');
      return;
    }

    const age = this.calculateAge(dateOfBirth);
    this.registrationForm.get('age')?.setValue(age >= 0 ? age : '');
  }

  calculateAge(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    
    return age;
  }

  submitForm(): void {
    console.log('submit');
    
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // const formData = this.registrationForm.getRawValue();
    const formData = {
      ...this.registrationForm.value,
      centid: this.centerId,
      age: this.registrationForm.get('age')?.value
    }

    this.service.YouthsRegistration(formData)
      .subscribe((res) => {
        this.isSubmitting = false;

        if (res == 'Student registered successfully') {
          alert('Registered Successfully! \nPlease login with register mobile number to continue!');
          this.registrationForm.reset();
          this.router.navigate(['/login']);
        } else {
          alert('Registration failed');
        }
      });
  }

  get f() {
    return this.registrationForm.controls;
  }
}
