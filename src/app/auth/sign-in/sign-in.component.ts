import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Credential } from '../models/credantial';
import { StorageService } from 'src/app/core/services/stogare.service';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'ngc-sign-in',
  template: `
    <form class="login-form" [formGroup]="signInForm" (ngSubmit)="send()">
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
        display: flex;
      }

      .form-fields > input {
        width: 100%;
      }

      .form-button-groups > button:last-child {
        margin-left: 16px;
      }

      .login-header {
        background-color: #eee;
        border-bottom: 1px solid #8a8a8a;
        text-align: center;
      }

      .login-header > h2 {
        margin-top: 0px;
        padding: 20px 24px 0 24px;
      }

      .login-footer {
        border-top: 1px solid #ccc;
        text-align: center;
      }
  `
  ]
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private storage: StorageService) {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });  
  }

  send() {
    if (this.signInForm.valid && this.signInForm.touched) {
      this.authService
      .login(this.signInForm.value as Credential)
      .subscribe((response: AjaxResponse) => {
        this.storage.setItem('access-token', response.response['token']);
        this.router.navigate(['/dashboard']);
      });
    }
  }

  reset() {
    this.signInForm.reset();
  }
}
