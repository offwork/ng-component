import { Component, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'ngc-login-header',
  template: `
    <div class="login-header">
      <h2>{{ title }}</h2>
    </div>
  `,
  styles: [
    `
    .login-header {
      background-color: #eee;
      border-bottom: 1px solid #8a8a8a;
      text-align: center;
    }

    .login-header > h2 {
      margin-top: 0px;
      padding: 20px 24px 0 24px;
    }
  `
  ]
})
export class LoginHeaderComponent {
  @Input() title: string;
}
