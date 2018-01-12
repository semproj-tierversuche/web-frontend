import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ResultPageComponent} from './result-page/result-page.component';
import {SearchpageComponent} from './searchpage/searchpage.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {InfoPageComponent} from './info-page/info-page.component';

const appRoutes: Routes = [
  { path: 'result/:id', component: ResultPageComponent },
  { path: 'search', component: SearchpageComponent },
  {path: 'about', component: AboutPageComponent},
  {path: 'info', component: InfoPageComponent},
  {path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
