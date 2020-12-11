import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngc-sign-in',
  template: `
    <form class="login-form" [formGroup]="signInForm" (ngSubmit)="send(signInForm)">
      <div class="form-fields">
        <input type="email" formControlName="email" />
      </div>
      <div class="form-fields">
        <input type="password" formControlName="password" />
      </div>
      <div class="form-button-groups">
        <button type="button" (click)="reset()">Reset</button>
        <button type="submit">Send</button>
      </div>
    </form>
  `,
  styles: [
    `
      .login-form {
        display: flex;
        flex-direction: column;
        padding: 24px;
      }

      .form-fields {
        margin-bottom: 16px;
      }

      .form-fields > input {
        width: 100%;
      }

      .form-button-groups {
      }

      .form-button-groups > button {
        padding: 8px;
      }
    .login-header {
      background-color: #eee;
      border-bottom: 1px solid #333;
      text-align: center;
    }

    .login-header > h2 {
      margin-top: 0px;
      padding: 20px 24px 0 24px;
    }

    .login-footer {
      border-top: 1px solid #333;
      text-align: center;
    }
  `
  ]
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });  
  }

  send(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
    }

    this.router.navigateByUrl('/');

  }

  reset() {
    this.signInForm.reset();
  }
}
