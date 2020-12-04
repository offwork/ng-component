import { Component } from '@angular/core';

@Component({
  selector: 'ngc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-component';
  loginTexts = {
    title: 'Login', footerText: '© Copyright 2020 vbt-account.com • All Rights Reserved VBT™'
  }
}
