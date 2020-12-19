import { Component } from '@angular/core';

@Component({
  selector: 'ngc-simple-layout',
  template: `
    <div class="simple-layout">
      <ngc-login [loginTexts]="loginTexts">
        <ngc-login-tpl>
          <ng-template>
          <router-outlet></router-outlet>
          <div class="redirect-buttons">
            <a routerLink="/sign-in">Oturum Aç</a>
            <a routerLink="sign-up">Hesap Olustur</a>
            <a routerLink="recover">Parolami unuttum!</a>
          </div>          
          </ng-template>
        </ngc-login-tpl>
      </ngc-login>
    </div>
  `,
  styles: [
    `
      :host {
        margin: auto;
        width: 50%;
      }

      .simple-layout {
        background: white;
        box-shadow: 3px 3px 2px 0px rgba(157, 157, 157, 0.7);
      }

      .redirect-buttons {
        padding: 24px;
      }

      .redirect-buttons > a:not(:last-child) {
        margin-right: 16px;
      }
    `
  ]
})
export class SimpleLayoutComponent {

  currentSegment: string;

  loginTexts = {
    title: 'Login', footerText: '© Copyright 2020 vbt-account.com • All Rights Reserved VBT™'
  }
}
