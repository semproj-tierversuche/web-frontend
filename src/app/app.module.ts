import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MiddlewareService} from './services/middleware.service';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngularModule } from './material/material.angular';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';

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
    ConfirmationComponentComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule
  ],

  entryComponents: [
    ComparePageComponent,
    ConfirmationComponentComponent
  ],

  providers: [MiddlewareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
