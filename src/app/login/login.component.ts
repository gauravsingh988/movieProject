import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  SignupForm!: FormGroup;
  formchange = false;
  formsubmit = false;


  constructor() {
    this.SignupForm = new FormGroup({
      'rname': new FormControl('', [Validators.required]),
      'remail': new FormControl('', [Validators.required]),
      'rmobile': new FormControl('', [Validators.required,]),
      'rpassword': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

  }
  onSubmit() {
    this.formsubmit = true;
    if (this.SignupForm.valid) {
      console.log('form submitted');
    }
  }
  singup() {
    this.formchange = !this.formchange
  }
}
