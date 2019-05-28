import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSkeletonPreloaderModule } from 'ngx-skeleton-preloader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonPreloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
