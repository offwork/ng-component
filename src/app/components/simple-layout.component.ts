import { Component } from '@angular/core';


@Component({
  selector: 'ngc-simple-layout',
  template: `
    <div class="simple-layout">
      <ngc-login [loginTexts]="loginTexts">
        <ngc-login-tpl>
          <ng-template>
          <router-outlet></router-outlet>
          <div>
            <a *ngIf="isSignIn" routerLink="/sign-in" (click)="isSignInClicked()">Oturum Aç</a>
            <a *ngIf="isSignUp" routerLink="sign-up" (click)="isSignUpClicked()">Hesap Olustur</a>
            <a *ngIf="isRevovery" routerLink="recover" (click)="isRevoveryClicked()">Parolami unuttum!</a>
          </div>
          </ng-template>
        </ngc-login-tpl>
      </ngc-login>
    </div>
  `,
  styles: [
    `
    a {
          margin: 0 10px 5px 15px;
    }
      .simple-layout {
        widht: 100%;
        heaight: 100%;
      }
    `
  ]
})
export class SimpleLayoutComponent {


  constructor() {

  }

  isSignIn = false;
  isSignUp = true;
  isRevovery = true;

  loginTexts = {
    title: 'Login', footerText: '© Copyright 2020 vbt-account.com • All Rights Reserved VBT™'
  }

  isSignInClicked() {

    this.isSignUp = true;
    this.isRevovery = true;
    this.isSignIn = false;
  }

  isSignUpClicked() {
    this.isSignIn = true;
    this.isRevovery = true;
    this.isSignUp = false;
  }

  isRevoveryClicked() {
    this.isSignIn = true;
    this.isRevovery = false;
    this.isSignUp = true;
  }
}
