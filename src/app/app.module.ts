import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { MatTableModule, MatGridListModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
