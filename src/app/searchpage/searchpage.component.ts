///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit} from '@angular/core';
import {MiddlewareData} from '../common/middleware.data';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  pmid: number;
  firstLanguage = 'EN';
  secondLanguage = 'DE';
  showConfirmBox = false;
  showAboutUsBox = false;
  showLanguageBox = false;
  middlewareData: MiddlewareData;

  enterPmid(input){
    this.closeConfirmBox();
    if (this.isInputValid(input)){
      this.pmid = input;
      this.openConfirmBox();
    } else {
      console.log('wrong pmid'); //change to error message
    }
  }


  changeLanguage() {
    const temp = this.firstLanguage;
    this.firstLanguage = this.secondLanguage;
    this.secondLanguage = temp;
    this.openLanguageBox();
  }

  openConfirmBox(){
    this.showConfirmBox = true;
  }

  closeConfirmBox(){
    this.showConfirmBox = false;
  }

  openAboutUsBox(){
    this.showAboutUsBox = !this.showAboutUsBox;
  }

  openLanguageBox(){
    this.showLanguageBox = !this.showLanguageBox;
  }

  isInputValid(input){
    if (Number.isInteger(Number(input)) &&
      Number(input).toString().length == 8){
        return true;
    }
    return false;
  }

  deleteMeLater(){
    let i = 0;
    i++;
  }

  constructor() { }

  ngOnInit() {
  }

  userConfirmed() {
    // User pressed Ok
  }

}
