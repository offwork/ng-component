import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngc-sign-in',
  template: `
    <form class="login-form" [formGroup]="loginForm" (ngSubmit)="send(loginForm)">
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
    `
  ]
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });  
  }

  send(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
    }
  }

  reset() {
    this.loginForm.reset();
  }
}
