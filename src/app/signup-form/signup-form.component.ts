import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidate } from './signupvalidate.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      SignupValidate.cannotContainSpace
      ]),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      SignupValidate.cannotContainSpace
      ])
  });

  get password() {
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
