import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../match-password.validator';
import { SignUp } from '../models/signup';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupDetails = new SignUp('', '', '', '', '', new Date('2000-03-01'), -1, -1);



  forbiddenChars = new RegExp('^[A-Za-z0-9_-]*$');
  signupForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24), Validators.pattern("^[A-Za-z0-9_-]*$")]],
      cpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24), Validators.pattern("^[A-Za-z0-9_-]*$")]],
      dob: ['', [Validators.required]],
      risk: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")]]},
      {
        validator: ConfirmPasswordValidator("password", "cpassword")
      }
    );
  }

  signup() {
    console.log(this.signupForm.value)
  }

}
