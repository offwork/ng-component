import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginLayoutModule } from './components/login-layout/login-layout.module';
import { AppRoutingModule } from './app.routing.module';
import { AppLayoutComponent } from './components/app-layout.component';
import { SimpleLayoutComponent } from './components/simple-layout.component';
import { NotFoundComponent } from './components/not-found.component';
import { CommonModule } from '@angular/common';
import { StorageService } from './core/services/stogare.service';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SimpleLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoginLayoutModule,
    AppRoutingModule
  ],
  providers: [ /* StorageService */ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
