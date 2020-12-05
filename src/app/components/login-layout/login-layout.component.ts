import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { LoginTplDirective } from './login-tpl.directive';

@Component({
  selector: 'ngc-login',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  @Input() loginTexts: any;

  @ViewChild("emptyTemplate") emptyTemplate: TemplateRef<any>;
  @ContentChild(LoginTplDirective) loginContentDirective: LoginTplDirective;

  templateContext = {
    submitForm: (val: any) => {},
    formFieldMode: undefined
  };

  get logingContentTemplate(): TemplateRef<any> {
    return ((this.loginContentDirective && this.loginContentDirective.template) || this.emptyTemplate);
  }
}
