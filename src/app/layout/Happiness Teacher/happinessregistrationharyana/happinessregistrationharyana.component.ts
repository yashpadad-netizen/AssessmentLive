import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalpifService } from 'src/app/shared/services/calpif.service';

@Component({
  selector: 'app-happinessregistrationharyana',
  templateUrl: './happinessregistrationharyana.component.html',
  styleUrls: ['./happinessregistrationharyana.component.scss']
})
export class HappinessregistrationharyanaComponent implements OnInit {

  teacherForm: FormGroup;
  isSubmitting = false;

  state;
  city;
  districts;
  school;

  standardOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private fb: FormBuilder,
    private service: CalpifService,
    private router: Router) { }

  ngOnInit(): void {

    this.teacherForm = this.fb.group({

      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],

      schoolname: ['', Validators.required],
      udiseno: [''],

      standard: [[], Validators.required],

      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],

    });

    this.teacherForm.patchValue({
      state: 'Haryana',
    });

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct district', 'district', "where state = 'Haryana'")
      .subscribe((res: any) => {
        this.districts = res;
      });
  }

  onDistrictChange(value: any) {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct city', 'city', "where state = 'Haryana' and district = '" + value + "'")
      .subscribe((res: any) => {
        this.city = res;
      });

  }

  onCityChange(value: any) {

    this.service.FillDropDown('HappinessSchoolwiseData', 'distinct schoolname', 'schoolid', "where city = '" + value + "'")
      .subscribe((res: any) => {
        this.school = res;
        console.log(res);
        
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
        standard: this.teacherForm.value.standard.join(','),
        teachername:
          this.teacherForm.value.firstname + ' ' +
          this.teacherForm.value.middlename + ' ' +
          this.teacherForm.value.lastname
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