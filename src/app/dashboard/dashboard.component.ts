import { Component } from '@angular/core';

@Component({
  selector: 'ngc-dashboard',
  template: `
    <div>
      <h2>dashboard works!</h2>
      <a routerLink="/sign-in">Oturum Aç</a>
    </div>
  `,
  styles: [
  ]
})
export class DashboardComponent {}
