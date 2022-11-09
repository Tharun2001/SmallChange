import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  risk: number = 1;

  disableButton = true;
  categories = ["0-20,000","20,001-40,000","40,001-60,000","60,001-80,000","80,001-100,000","100,001-150,000","150,000+"];
  invLengths = ["0-5years","5-7 years","7-10 years","10-15 years","15+ years"];
  preferencesForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.preferencesForm = this.formBuilder.group({
      investmentPurpose: ['',Validators.required],
      riskTolerance: ['',[Validators.required, Validators.min(1), Validators.max(5)]],
      incomeCategory: ['',Validators.required],
      invLength: ['', Validators.required]
    });
    this.preferencesForm.disable();
  }

  enableEditing() {
    this.disableButton = false;
    this.preferencesForm.enable();
  }

  submitPreferences() {
// To post to service
  }

}
