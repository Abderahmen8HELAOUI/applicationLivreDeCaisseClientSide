import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {registerUser, RegisterUser$Params} from "../services/fn/auth-controller/register-user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      uniqueIdentifier: ['', [Validators.required, Validators.maxLength(10)]],
      organismCode: ['', [Validators.required, Validators.maxLength(3)]],
      role: [[]] // assuming roles is an array
    });
  }

  onSubmit(): void {
    const { username, email, password, uniqueIdentifier, organismCode, role } = this.registerForm.value;
    const organismId = 'your-organism-id'; // replace with actual organismId

    const params: RegisterUser$Params = {
      organismId,
      body: {
        username,
        email,
        password,
        uniqueIdentifier,
        organismCode,
        role
      }
    };

    registerUser(this.http, 'http://localhost:8080', params).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
