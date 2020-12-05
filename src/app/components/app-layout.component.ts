import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-app-layout',
  template: `
    <div class="app-layout">
      <header> <span>App Logo</span> <nav></nav> </header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer>
        <p>© Copyright 2020 vbt-account.com • All Rights Reserved VBT™</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .app-layout {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
