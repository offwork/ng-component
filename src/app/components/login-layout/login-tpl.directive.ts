import {
  Directive,
  ContentChild,
  TemplateRef
} from "@angular/core";

@Directive({
  selector: "ngc-login-tpl"
})
export class LoginTplDirective {
  @ContentChild(TemplateRef) template: TemplateRef<any>;
}
