import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFooterComponent } from './login-footer.component';
import { LoginComponent } from './login.component';
import { LoginHeaderComponent } from './login-header.component';
import { LoginTplDirective } from './login-tpl.directive';

@NgModule({
  declarations: [LoginComponent, LoginHeaderComponent, LoginFooterComponent, LoginTplDirective],
  exports: [LoginComponent, LoginTplDirective],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
