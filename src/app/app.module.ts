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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialAngularModule} from './material/material.angular';
import {RouterModule, Routes} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const appRoutes: Routes = [
  { path: 'results', component: ResultPageComponent },
  { path: 'search',      component: SearchpageComponent },
  {path: 'about', component: AboutPageComponent},
  {path: 'info', component: InfoPageComponent}
];

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
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialAngularModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
