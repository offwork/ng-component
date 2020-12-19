import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-app-layout',
  template: `
    <div class="app-layout">
      <header class="app-header">
        <div class="app-toolbar">
          <span>App Logo</span>
          <nav class="app-navs">
            <a routerLink="/sign-in">Oturumu Kapat</a>
          </nav>
        </div> 
      </header>
      <main class="app-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="app-footer">
        <p>© Copyright 2020 vbt-account.com • All Rights Reserved VBT™</p>
      </footer>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }

      .app-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
      }

      .app-toolbar {
        align-items: center;
        display: flex;
        height: 40px;
        justify-content: space-between;
        padding: 0 24px;
      }

      .app-header {
        background-color: #eee;
        border-bottom: 1px solid #8a8a8a;
        padding: 16px;
        box-shadow: 0 3px 2px 0px rgba(157, 157, 157, 0.7);
      }

      .app-content {
        padding: 0 24px;
      }

      .app-footer {
        border-top: 1px solid #ccc;
        text-align: center;
        height: 73px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `
  ]
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
