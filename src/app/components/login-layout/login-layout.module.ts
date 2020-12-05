import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFooterComponent } from './login-footer.component';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginHeaderComponent } from './login-header.component';
import { LoginTplDirective } from './login-tpl.directive';

@NgModule({
  declarations: [LoginLayoutComponent, LoginHeaderComponent, LoginFooterComponent, LoginTplDirective],
  exports: [LoginLayoutComponent, LoginTplDirective],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginLayoutModule { }
