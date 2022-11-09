import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmPasswordValidator } from '../match-password.validator';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormComponent ],
      imports: [
        ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show invalid password', () => {
    let pass = component.signupForm.controls['password'];
    pass.setValue('aryan');
    expect(pass.valid).toBeFalsy();
  });

  it('should notify when password and confirm password are different', () => {
    let pass = component.signupForm.controls['password'];
    let cpass = component.signupForm.controls['cpassword'];
    pass.setValue('aryan');
    cpass.setValue('aryan');
    expect(cpass.hasError('confirmPasswordValidator')).toBeFalsy();
  });

  it('should show invalid phone number', () => {
    let phone = component.signupForm.controls['phone'];
    phone.setValue('123-4567890');
    expect(phone.valid).toBeFalsy();
  });

  // xit('should show invalid risk', () => {
  //   let risk = component.signupForm.controls['risk'];
  //   risk.setValue('7');
  //   expect(risk.valid).toBeFalsy();
  // });

  it('should accept details when all values are correct', () => {
    component.signupForm.controls['email'].setValue('test@gmail.com');
    component.signupForm.controls['firstName'].setValue('Test');
    component.signupForm.controls['lastName'].setValue('Test');
    component.signupForm.controls['password'].setValue('Test-1234');
    component.signupForm.controls['cpassword'].setValue('Test-1234');
    component.signupForm.controls['dob'].setValue('03-01-2000');
    component.signupForm.controls['phone'].setValue('123-456-7890');
    component.signupForm.controls['username'].setValue('TestUser');

    expect(component.signupForm.valid).toBeTruthy();
  });
  it('should be invalid when all values are not correct', () => {
    component.signupForm.controls['email'].setValue('test@gmail.com');
    component.signupForm.controls['firstName'].setValue('Test');
    component.signupForm.controls['lastName'].setValue('Test');
    component.signupForm.controls['password'].setValue('Test-1234');
    component.signupForm.controls['cpassword'].setValue('Test-1234');
    component.signupForm.controls['dob'].setValue('03/01/2000');
    component.signupForm.controls['phone'].setValue('123-456-790');
    //component.signupForm.controls['risk'].setValue('3');

    expect(component.signupForm.valid).toBeFalsy();
  })
});
