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

  id: string = '';

  // Dynamic Dropdown
  dropdownLabel = '';

  tableName = '';
  idColumn = '';
  nameColumn = '';

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

    this.id = this.route.snapshot.params['id'];

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      location: ['', Validators.required],
      studentname: ['', Validators.required],
      mobileno: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9][0-9]{9}$')
        ]
      ],
      dob: ['', Validators.required],
      age: [{ value: '', disabled: true }],
      qualification: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.initializePage();
  }

  initializePage(): void {

    if (!this.id) {
      return;
    }

    if (this.id.startsWith('CN')) {

      this.dropdownLabel = 'Center';
      this.tableName = 'Center';
      this.idColumn = 'centid';
      this.nameColumn = 'centname';

    }
    else if (this.id.startsWith('CL')) {

      this.dropdownLabel = 'College';
      this.tableName = 'College';
      this.idColumn = 'collegeid';
      this.nameColumn = 'collegename';

    }

    this.loadDetails();

  }

  loadDetails(): void {

    const whereCondition = `where ${this.idColumn}='${this.id}'`;

    // Name
    this.service.FillDropDown(
      this.tableName,
      this.nameColumn,
      this.idColumn,
      whereCondition
    ).subscribe((res: any) => {

      this.registrationForm.patchValue({
        centname: res?.[0]?.column1 || ''
      });

    });

    // State
    this.service.FillDropDown(
      this.tableName,
      'state',
      'state',
      whereCondition
    ).subscribe((res: any) => {

      this.registrationForm.patchValue({
        state: res?.[0]?.column1 || ''
      });

    });

    // Location (City)
    this.service.FillDropDown(
      this.tableName,
      'city',
      'city',
      whereCondition
    ).subscribe((res: any) => {

      this.registrationForm.patchValue({
        location: res?.[0]?.column1 || ''
      });

    });

  }

  onDateOfBirthChange(): void {

    const dob = this.registrationForm.get('dob')?.value;

    if (!dob) {

      this.registrationForm.get('age')?.setValue('');

      return;
    }

    const age = this.calculateAge(dob);

    this.registrationForm.get('age')?.setValue(age >= 0 ? age : '');

  }

  calculateAge(dateOfBirth: string): number {

    const birthDate = new Date(dateOfBirth);

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
      today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (
        monthDifference === 0 &&
        today.getDate() < birthDate.getDate()
      )
    ) {
      age--;
    }

    return age;

  }

  submitForm(): void {

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData: any = {
      ...this.registrationForm.value,
      age: this.registrationForm.get('age')?.value
    };

    let registrationApi;

    if (this.id.startsWith('CN')) {
      formData.centid = this.id;
      formData.centname = this.registrationForm.get('name')?.value;
      registrationApi = this.service.YouthsRegistration(formData);
    }
    else if (this.id.startsWith('CL')) {
      formData.collegeid = this.id;
      formData.collegename = this.registrationForm.get('name')?.value;
      registrationApi = this.service.YouthsRegistrationSkilling(formData);
    }
    else {
      this.isSubmitting = false;
      alert('Invalid Registration Link');
      return;
    }

    registrationApi.subscribe(
      (res: any) => {

        this.isSubmitting = false;

        if (res === 'Student registered successfully') {

          alert(
            'Registered Successfully!\nPlease login with registered mobile number.'
          );

          this.registrationForm.reset();
          this.router.navigate(['/login']);

        } else {

          alert('Registration failed.');

        }

      },
      (error) => {
        this.isSubmitting = false;
        alert('Something went wrong. Please try again.');
        console.error(error);
      }
    );

  }

  get f() {

    return this.registrationForm.controls;

  }

}