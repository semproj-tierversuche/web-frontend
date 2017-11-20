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

@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    SearchFieldComponent,
    ResultTableComponent,
    ResultPageComponent,
    ComparePageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
