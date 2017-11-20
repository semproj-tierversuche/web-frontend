import { Component, OnInit} from '@angular/core';

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
  showErrorMessage= false;

  enterPmid(input){
    this.closeConfirmBox();
    console.log(this.showErrorMessage);
    if(this.isInputValid(input)){
      this.pmid = input;
      this.openConfirmBox();
    } else this.incorrectPmid();
  }

  incorrectPmid(){
    //this.showErrorMessage = true;
    setTimeout(function(){ this.showErrorMessage = false;}, 3000);
  }

  changeLanguage(){
    var temp = this.firstLanguage;
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
    if(Number.isInteger(Number(input)) &&
      Number(input).toString().length == 8){
        return true;
    };
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
