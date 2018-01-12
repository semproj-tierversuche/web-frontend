import { Component, Output, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
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
      document.getElementById('error-message').style.opacity = '0';
    } else {
      this.pmid = null;
      this.showErrorMessage();
    }
    this.sendPmid();
  }

  // show error message for 2,5 seconds with fadein/fadeout transition
  showErrorMessage() {
    document.getElementById('error-message').style.opacity = '1';
    document.getElementById('text-line').style.borderColor = 'rgba(255, 9, 12, 0.8)';
    (<HTMLImageElement>document.getElementById('search-icon')).src = '../../assets/ICONS/searchIconRed.png';

    setTimeout(function () {
      document.getElementById('error-message').style.opacity = '0';
      document.getElementById('text-line').style.borderColor = '#000000';
      (<HTMLImageElement>document.getElementById('search-icon')).src = '../../assets/ICONS/searchIcon.png';
      }, 2500);
  }

  isInputValid(input): boolean {
    if (Number.isInteger(Number(input)) &&
      input.length > 0 && input.length <= 8) {
      return true;
    }
    return false;
  }

  // Shows example pmid in input field after choosing it from examples menu
  exampleInput(exampleId) {
    (<HTMLInputElement>document.getElementById('text-line')).value = exampleId;
  }
}
