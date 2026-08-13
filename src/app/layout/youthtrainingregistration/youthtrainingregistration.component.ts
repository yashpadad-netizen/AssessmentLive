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

  streamOptions = [];

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
      stream: ['', Validators.required],
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
        name: res?.[0]?.column1 || ''
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

  onQualificationChanged(): void {

    const qualification = this.registrationForm.get('qualification')?.value;

    if (qualification === 'Below Secondary (Below 10th)') {
      this.streamOptions = [
        'NA'
      ];
    }
    if (qualification === 'Secondary (10th Pass)') {
      this.streamOptions = [
        'NA'
      ];
    }
    if (qualification === 'Higher Secondary (12th Pass)') {
      this.streamOptions = [
        'Arts',
        'Science',
        'Commerce',
        'Vocational'
      ];
    }
    if (qualification === 'Diploma') {
      this.streamOptions = [
        'Engineering & Technology',
        'Computer/IT',
        'Pharmacy',
        'Management/Business',
        'Architecture',
        'Paramedical/Health',
        'Agriculture',
        'Other'
      ];
    }
    if (qualification === 'Undergraduate (Graduation)') {
      this.streamOptions = [
        'B.A. – Bachelor of Arts',
        'B.Com. – Bachelor of Commerce',
        'B.Sc. – Bachelor of Science',
        'BBA – Bachelor of Business Administration',
        'BCA – Bachelor of Computer Applications',
        'BMS – Bachelor of Management Studies',
        'BCS – Bachelor of Computer Science',
        'B.E. / B.Tech. – Engineering',
        'B.Pharm – Bachelor of Pharmacy',
        'B.Sc. Nursing',
        'B.A.M.S. – Ayurveda',
        'B.H.M.S. – Homeopathy',
        'LL.B. – Bachelor of Laws',
        'B.Ed. – Bachelor of Education',
        'BSW – Bachelor of Social Work',
        'B.Arch. – Architecture',
        'B.Voc. – Bachelor of Vocation',
        'B.Des. – Bachelor of Design',
        'B.Lib. / B.Lib.I.Sc. – Library Science',
        'B.Com. / B.A. / B.Sc. – Other/Equivalent',
        'Other'
      ];
    }
    if (qualification === 'Postgraduate (Post Graduation)') {
      this.streamOptions = [
        'M.A. – Master of Arts',
        'M.Com. – Master of Commerce',
        'M.Sc. – Master of Science',
        'MBA – Master of Business Administration',
        'MCA – Master of Computer Applications',
        'MMS – Master of Management Studies',
        'M.E. / M.Tech. – Engineering',
        'M.Pharm – Master of Pharmacy',
        'M.Ed. – Master of Education',
        'M.S.W. – Master of Social Work',
        'LL.M. – Master of Laws',
        'M.Arch. – Architecture',
        'M.Des. – Master of Design',
        'M.Lib. / M.Lib.I.Sc. – Library Science',
        'MPH – Master of Public Health',
        'M.Voc. – Master of Vocation',
        'PG Diploma',
        'Other'
      ];
    }
    if (qualification === 'Doctorate (Ph.D.)') {
      this.streamOptions = [
        'Ph.D. – Arts & Humanities',
        'Ph.D. – Commerce',
        'Ph.D. – Management',
        'Ph.D. – Science',
        'Ph.D. – Computer Science / IT',
        'Ph.D. – Engineering & Technology',
        'Ph.D. – Education',
        'Ph.D. – Social Sciences',
        'Ph.D. – Law',
        'Ph.D. – Pharmacy',
        'Ph.D. – Medical & Health Sciences',
        'Ph.D. – Agriculture',
        'Ph.D. – Environmental Sciences',
        'Ph.D. – Other'
      ];
    }
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
            'Registered Successfully!'
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