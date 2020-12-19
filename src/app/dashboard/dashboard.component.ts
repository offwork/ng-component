import { Component } from '@angular/core';

@Component({
  selector: 'ngc-dashboard',
  template: `
    <div>
      <h2>dashboard works!</h2>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class DashboardComponent {}
