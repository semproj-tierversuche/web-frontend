import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialAngularModule} from './material/material.angular';
import {RouterModule, Routes} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    SearchFieldComponent,
    ResultTableComponent,
    ResultPageComponent,
    ComparePageComponent,
    NavigationComponent,
    AboutPageComponent,
    InfoPageComponent,
    ConfirmationComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
