import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngc-simple-layout',
  template: `
    <div class="simple-layout">
      <ngc-login [loginTexts]="loginTexts">
        <ngc-login-tpl>
          <ng-template>
          <router-outlet></router-outlet>
          <div>
            <a *ngIf="isSignIn" routerLink="/sign-in">Oturum Aç</a>
            <a *ngIf="isSingUp" routerLink="sign-up">Hesap Olustur</a>
            <a *ngIf="isRecover" routerLink="recover">Parolami unuttum!</a>
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
export class SimpleLayoutComponent implements OnInit, OnDestroy {
  loginTexts = {
    title: 'Login', footerText: '© Copyright 2020 vbt-account.com • All Rights Reserved VBT™'
  }

  routeChangesSub: Subscription;

  activeUrl = "";
  activeRoute = "";
  isSignIn = false;
  isSingUp = false;
  isRecover = false;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.setLinkState(this.router.url);


    this.routeChangesSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setLinkState((<NavigationEnd>event).url);
      }
    });
  }

  setLinkState(link: string) {
    if (link === "/sign-in") {
      this.isSingUp = true;
      this.isRecover = true;
      this.isSignIn = false;
    }
    else if (link === "/sign-in/sign-up") {
      this.isSignIn = true;
      this.isSingUp = false;
      this.isRecover = false;
    }
    else if (link === "/sign-in/recover") {
      this.isSignIn = true;
      this.isSingUp = true;
      this.isRecover = false;
    }
  }

  ngOnDestroy() {
    this.routeChangesSub.unsubscribe();
  }
}
