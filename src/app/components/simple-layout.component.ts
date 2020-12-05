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
      .simple-layout {
        widht: 100%;
        heaight: 100%;
      }
    `
  ]
})
export class SimpleLayoutComponent {
  loginTexts = {
    title: 'Login', footerText: '© Copyright 2020 vbt-account.com • All Rights Reserved VBT™'
  }
}
