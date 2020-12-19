import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ngc-simple-layout',
  template: `
    <div class="simple-layout">
      <ngc-login [loginTexts]="loginTexts">
        <ngc-login-tpl>
          <ng-template>
          <router-outlet></router-outlet>
          <div class="redirect-buttons" [ngSwitch]="currentSegment$.getValue()">
            <ng-container *ngSwitchCase="'/sign-in'">
              <a routerLink="sign-up">Hesap Olustur</a>
              <a routerLink="recover">Parolami unuttum!</a>
            </ng-container>
            <ng-container *ngSwitchCase="'/sign-up'">
              <a routerLink="/sign-in">Oturum Aç</a>
              <a routerLink="recover">Parolami unuttum!</a>
            </ng-container>
            <ng-container *ngSwitchCase="'/recover'">
              <a routerLink="/sign-in">Oturum Aç</a>
              <a routerLink="sign-up">Hesap Olustur</a>
            </ng-container>
          </div>
          <div>{{segment}}</div>
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
export class SimpleLayoutComponent implements OnInit {
  currentSegment$ = new BehaviorSubject<string>('/sign-in');

  loginTexts = {
    title: 'Login', footerText: '© Copyright 2020 vbt-account.com • All Rights Reserved VBT™'
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        console.log('URL: ', event);
        this.currentSegment$.next(event.url);
      });
  }
}
