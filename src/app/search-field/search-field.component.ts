import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  pmid: number;

  @Output() pmidEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  // pass pmid to searchpage component via EventEmitter
  sendPmid() {
    this.pmidEvent.emit(this.pmid);
  }

  /* user typed in pmid and pressed enter or search button
  (1)validate the input
  (2)input is valid - save pmid (and hide error message)
  (2.1)input is invalid - give error message and pmid = null
  (3)send pmid to searchpage component
  */
  enterPmid(input): void {
    if (this.isInputValid(input)) {
      this.pmid = input;
      document.getElementById('errorMessage').style.opacity = '0';
    } else {
      this.pmid = null;
      this.showErrorMessage();
    }
    this.sendPmid();
  }

  // show error message for 4 seconds with fadein/fadeout transition
  showErrorMessage() {
    document.getElementById('errorMessage').style.opacity = '1';
    setTimeout(function () {
      document.getElementById('errorMessage').style.opacity = '0';
      }, 3000);
  }

  // checks if pmid is a 8 digit number
  isInputValid(input): boolean {
    if (Number.isInteger(Number(input)) &&
      input.length <= 8) {
      return true;
    }
    return false;
  }

  exampleInput() {
    (<HTMLInputElement>document.getElementById('text-line')).value = '21494637';
    this.enterPmid('21494637');
  }
}
