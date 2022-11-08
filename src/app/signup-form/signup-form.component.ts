import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ConfirmPasswordValidator } from '../match-password.validator';
import { SignUp } from '../models/signup';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupDetails = new SignUp('', '', '', '', '', new Date('2000-03-01'), -1, -1);


  userAlreadyRegistered : boolean = false;
  forbiddenChars = new RegExp('^[A-Za-z0-9_-]*$');
  signupForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24), Validators.pattern("^[A-Za-z0-9_-]*$")]],
      cpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24), Validators.pattern("^[A-Za-z0-9_-]*$")]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")]]
    },
      {
        validator: ConfirmPasswordValidator("password", "cpassword")
      }
    );
  }

  signup() {
    let user: User = new User(
      this.signupForm.get('firstName')?.value,
      this.signupForm.get('lastName')?.value,
      this.signupForm.get('dob')?.value,
      this.signupForm.get('email')?.value,
      this.signupForm.get('phone')?.value,
      this.signupForm.get('username')?.value,
      this.signupForm.get('password')?.value
    );
    
    this.userService.registerNewUser(user);
    (this.userService.registerNewUser(user).pipe(first())
      .subscribe({
          next: (res) => {
            if(res == 0) {
              this.userAlreadyRegistered = true;
            }
            else {
              console.log("Registered result = " + res);
              this.router.navigateByUrl('');
            }
          }
      }));
    //this.router.navigate(['']);
  }

}
