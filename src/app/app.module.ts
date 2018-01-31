import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MiddlewareService} from './services/middleware.service';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './pages/search-page/searchpage.component';
import { SearchFieldComponent } from './pages/search-page/search-field/search-field.component';
import { ResultTableComponent } from './pages/result-page/result-table/result-table.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { ComparePageComponent } from './pages/result-page/result-table/compare-page/compare-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngularModule } from './material/material.angular';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ConfirmationComponentComponent } from './pages/search-page/confirmation-component/confirmation-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { MatMenuModule, MatTooltipModule } from '@angular/material';
import { FeedbackComponent } from './pages/result-page/result-table/feedback/feedback.component';
import { PrintViewComponent } from './pages/result-page/print-view/print-view.component';

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
    FeedbackComponent,
    PrintViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
  ],

  entryComponents: [
    ComparePageComponent,
    ConfirmationComponentComponent,
    FeedbackComponent
  ],

  providers: [MiddlewareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
