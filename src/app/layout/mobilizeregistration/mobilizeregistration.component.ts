import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-mobilizeregistration',
  templateUrl: './mobilizeregistration.component.html',
  styleUrls: ['./mobilizeregistration.component.scss']
})
export class MobilizeregistrationComponent implements OnInit {

  registrationForm: FormGroup;

  isSubmitting = false;

  id: string = '';

  dropdownLabel = '';

  tableName = '';
  idColumn = '';
  nameColumn = '';

  readonly qualificationOptions = [
    'Below 10th',
    '10th Pass',
    '12th Pass',
    'Diploma',
    'Undergraduation',
    'Graduation',
    'Postgraduation',
    'Ph.D.'
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
      CenterName: ['', Validators.required],
      State: ['', Validators.required],
      District: ['', Validators.required],
      City: ['', Validators.required],
      StudentName: ['', Validators.required],
      MobileNo: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      AadhaarNumber: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      DOB: ['', Validators.required],
      Age: [{ value: '', disabled: true }],
      Qualification: ['', Validators.required],
      Address: ['', Validators.required],
      PinCode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      Gender: ['', Validators.required],
      JobInterested: ['', Validators.required],
      NumberOfFamily: ['', Validators.required],
      // Model: ['', Validators.required],
      YouKnow: ['', Validators.required],
      Email: [''],

      declaration1: [false, Validators.requiredTrue],
      declaration2: [false, Validators.requiredTrue]
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
    // else if (this.id.startsWith('CL')) {

    //   this.dropdownLabel = 'College';
    //   this.tableName = 'College';
    //   this.idColumn = 'collegeid';
    //   this.nameColumn = 'collegename';

    // }

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
        CenterName: res?.[0]?.column1 || ''
      });

    });

    // State
    this.service.FillDropDown(
      this.tableName,
      'State',
      'State',
      whereCondition
    ).subscribe((res: any) => {

      this.registrationForm.patchValue({
        State: res?.[0]?.column1 || ''
      });

    });

    // District
    this.service.FillDropDown(
      this.tableName,
      'District',
      'District',
      whereCondition
    ).subscribe((res: any) => {

      this.registrationForm.patchValue({
        District: res?.[0]?.column1 || ''
      });

    });

    // City
    this.service.FillDropDown(
      this.tableName,
      'city',
      'city',
      whereCondition
    ).subscribe((res: any) => {

      this.registrationForm.patchValue({
        City: res?.[0]?.column1 || ''
      });

    });

  }

  onDateOfBirthChange(): void {

    const DOB = this.registrationForm.get('DOB')?.value;

    if (!DOB) {

      this.registrationForm.get('Age')?.setValue('');

      return;
    }

    const Age = this.calculateAge(DOB);

    this.registrationForm.get('Age')?.setValue(Age >= 0 ? Age : '');

  }

  calculateAge(dateOfBirth: string): number {

    const birthDate = new Date(dateOfBirth);

    const today = new Date();

    let Age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
      today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (
        monthDifference === 0 &&
        today.getDate() < birthDate.getDate()
      )
    ) {
      Age--;
    }

    return Age;

  }

  submitForm(): void {

    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData: any = {
      ...this.registrationForm.value,
      Age: this.registrationForm.get('Age')?.value
    };

    let registrationApi;

    if (this.id.startsWith('CN')) {
      formData.CenterId = this.id;
      registrationApi = this.service.AddMobilizeStudent(formData);
    }
    // else if (this.id.startsWith('CL')) {
    //   formData.collegeid = this.id;
    //   formData.collegename = this.registrationForm.get('CenterName')?.value;
    //   registrationApi = this.service.AddMobiliseStudent(formData);
    // }
    else {
      this.isSubmitting = false;
      alert('Invalid Registration Link');
      return;
    }

    registrationApi.subscribe((res: any) => {

      this.isSubmitting = false;

      if (res.Message === 'Student saved successfully') {
        alert('Registered Successfully!');
        this.registrationForm.reset();
        this.router.navigate(['/login']);
      }
      else if (res.Message === 'Mobile number already exists') {
        alert("Student already exists!");
        this.registrationForm.reset();
      }
      else {
        alert('Registration failed!');
      }

    },
      (error) => {
        this.isSubmitting = false;
        alert('Something went wrong. Please try again!');
        console.error(error);
      }
    );

  }

  onlyNumbers(event: any): void {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    this.registrationForm.get('PinCode')?.setValue(event.target.value, { emitEvent: false });
  }

  onlyNumbers1(event: any): void {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    this.registrationForm.get('NumberOfFamily')?.setValue(event.target.value, { emitEvent: false });
  }

  onlyNumbers2(event: any): void {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    this.registrationForm.get('MobileNo')?.setValue(event.target.value, { emitEvent: false });
  }

  onlyNumbersAadhar(event: any): void {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    this.registrationForm.get('AadhaarNumber')?.setValue(event.target.value, { emitEvent: false });
  }

  get f() {

    return this.registrationForm.controls;

  }

}
