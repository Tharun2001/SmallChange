import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Preference } from '../models/preference';
import { PreferenceService } from './preference.service';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  submitted = false;
  disableButton = true;
  username = '';
  risk : number = 0;
  incomeCategory = '';
  purpose = '';
  loi = '';
  categories = ["0-20,000","20,001-40,000","40,001-60,000","60,001-80,000","80,001-100,000","100,001-150,000","150,000+"];
  invLengths = ["0-5 years","5-7 years","7-10 years","10-15 years","15+ years"];

  preferencesForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private preferenceService: PreferenceService) { }



  ngOnInit(): void {
    this.preferencesForm = this.formBuilder.group({
      investmentPurpose: ['', Validators.required],
      riskTolerance: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      incomeCategory: ['', Validators.required],
      invLength: ['', Validators.required]
    });
    this.preferencesForm.disable();
    this.getPreference();
  }
  getPreference() {
    this.preferenceService.getPreference().subscribe({ next: (res) => {

      this.preferencesForm = this.formBuilder.group({
        investmentPurpose: [res.purpose, Validators.required],
        riskTolerance: [res.risk, [Validators.required, Validators.min(1), Validators.max(5)]],
        incomeCategory: [res.incomeCategory, Validators.required],
        invLength: [res.lengthOfInvestment, Validators.required]
      });
      this.preferencesForm.disable();

    }, error: () => {

    }})
  }

  enableEditing() {
    this.disableButton = false;
    this.preferencesForm.enable();
  }

  submitPreferences() {
    if(localStorage.getItem('username') != null) {
      this.username = localStorage.getItem('username')!;
    }
    if(this.preferencesForm.get('riskTolerance')?.value != null) {
      this.risk = parseInt(this.preferencesForm.get('riskTolerance')?.value);
    }
    if(this.preferencesForm.get('incomeCategory')?.value != null) {
      this.incomeCategory = this.preferencesForm.get('incomeCategory')?.value;
    }
    if(this.preferencesForm.get('investmentPurpose')?.value != null) {
      this.purpose = this.preferencesForm.get('investmentPurpose')?.value;
    }
    if(this.preferencesForm.get('invLength')?.value != null) {
      this.loi = this.preferencesForm.get('invLength')?.value;
    }


    //let preference = {"username" : `${this.username}`, 'risk' : `${this.risk}`, "incomeCategory" : `${this.incomeCategory}`, "lengthOfInvestment" : `${this.loi}`, "purpose" : `${this.purpose}`};
    let preference = {username :this.username, risk : this.risk, incomeCategory : this.incomeCategory, lengthOfInvestment : this.loi, purpose : this.purpose};

    this.preferenceService.setPreference(preference).subscribe({ next: (res) => {
      console.log("RESULT = " + res);
      if(res != null) {
        this.submitted = true;
      }
    }, error: () => {

    }})
  }

}
