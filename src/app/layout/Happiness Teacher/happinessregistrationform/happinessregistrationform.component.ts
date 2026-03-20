import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-happinessregistrationform',
  templateUrl: './happinessregistrationform.component.html',
  styleUrls: ['./happinessregistrationform.component.scss']
})
export class HappinessregistrationformComponent implements OnInit {

  teacherForm: FormGroup;
  isSubmitting = false;

  state;
  city;
  district;
  school;

  standardOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private fb: FormBuilder,
    private service: CalpifService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.teacherForm = this.fb.group({

      teachername: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],

      schoolname: ['', Validators.required],
      udiseno: [''],

      standard: [[], Validators.required],

      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],

      // teacherdesignation: ['', Validators.required]

    });

    this.loadStates();

  }

  loadStates() {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct state', 'state', '')
      .subscribe((res: any) => {
        this.state = res;
      });

  }

  onStateChange(stateValue) {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct district', 'district', "where state='" + stateValue + "'")
      .subscribe((res: any) => { this.district = res });

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct city', 'city', "where state='" + stateValue + "'")
      .subscribe((res: any) => { this.city = res });

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid', "where state='" + stateValue + "'")
      .subscribe((res: any) => { this.school = res });

  }

  onDistrictChange(districtValue) {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct city', 'city', "where district='" + districtValue + "'")
      .subscribe((res: any) => { this.city = res });

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid', "where district='" + districtValue + "'")
      .subscribe((res: any) => { this.school = res });

  }

  onCityChange(cityValue) {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid', "where city='" + cityValue + "'")
      .subscribe((res: any) => { this.school = res });

  }

  onSchoolChange(schoolValue) {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct udiseno', 'udiseno', "where schoolname='" + schoolValue + "'")
      .subscribe((res: any) => {

        this.teacherForm.patchValue({
          udiseno: res[0].column1
        });

      });

  }

  isStandardSelected(option: number): boolean {

    const selected = this.teacherForm.get('standard')?.value || [];
    return selected.includes(option);

  }

  toggleStandard(option: number, checked: boolean) {

    const standards = this.teacherForm.get('standard')?.value || [];

    if (checked) {
      standards.push(option);
    }
    else {
      const index = standards.indexOf(option);
      if (index > -1) {
        standards.splice(index, 1);
      }
    }

    this.teacherForm.patchValue({
      standard: standards
    });

    this.teacherForm.get('standard')?.markAsTouched();

  }

  submitForm() {

    if (this.teacherForm.valid) {

      this.isSubmitting = true;

      const formData = {
        ...this.teacherForm.value,
        standard: this.teacherForm.value.standard.join(',')
      };

      this.service.TeacherRegistrationHappiness(formData)
        .subscribe((res) => {

          this.isSubmitting = false;

          if (res == 'Teacher registered successfully') {

            alert('Teacher Registered Successfully! \nPlease login with register mobile number to continue!');

            this.teacherForm.reset();

            this.router.navigate(['/login']);

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