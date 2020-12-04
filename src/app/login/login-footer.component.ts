import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngc-login-footer',
  template: `
    <div class="login-footer">
      <p>{{footerText}}</p>
    </div>
  `,
  styles: [
    `
      .login-footer {
        border-top: 1px solid #333;
        text-align: center;
      }
    `
  ]
})
export class LoginFooterComponent {
  @Input() footerText: string;
}
