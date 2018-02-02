import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from '../../../../services/middleware.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isAnimalTesting: boolean;
  isSimilar: boolean;
  isRelevant: boolean;
  userMessage: string;
  feedbackSubmitted = false;

  constructor(private middlewareService: MiddlewareService, public thisDialogRef: MatDialogRef<FeedbackComponent>) { }

  ngOnInit() {
  }

  checkAnimalTesting(userSelection) {
    this.isAnimalTesting = userSelection;
    if (userSelection === true) {
      document.getElementById('animal-testing-yes').style.backgroundColor = '#4CAF50';
      document.getElementById('animal-testing-no').style.backgroundColor = 'transparent';
    }
    if (userSelection === false) {
      document.getElementById('animal-testing-yes').style.backgroundColor = 'transparent';
      document.getElementById('animal-testing-no').style.backgroundColor = '#fa8686';
    }
  }

  checkSimilar(userSelection) {
    this.isSimilar = userSelection;
    if (userSelection === true) {
      document.getElementById('similar-yes').style.backgroundColor = '#4CAF50';
      document.getElementById('similar-no').style.backgroundColor = 'transparent';
    }
    if (userSelection === false) {
      document.getElementById('similar-yes').style.backgroundColor = 'transparent';
      document.getElementById('similar-no').style.backgroundColor = '#fa8686';
    }
  }

  checkRelevant(userSelection) {
    this.isRelevant = userSelection;
    if (userSelection === true) {
      document.getElementById('relevant-yes').style.backgroundColor = '#4CAF50';
      document.getElementById('relevant-no').style.backgroundColor = 'transparent';
    }
    if (userSelection === false) {
      document.getElementById('relevant-yes').style.backgroundColor = 'transparent';
      document.getElementById('relevant-no').style.backgroundColor = '#fa8686';
    }
  }

  submitFeedback() {
    if (this.isEverythingAnswered()) {
      const feedback = {
        'Similar': this.isSimilar,
        'Origin-PMID': this.middlewareService.middlewareData.Origin.PMID,
        'Text': this.userMessage,
        'Result-PMID': this.middlewareService.currentResult.Record.PMID,
        'Relevant': this.isRelevant,
        'AnimalTest': this.isAnimalTesting
      };
      console.log(feedback);
      this.middlewareService.postFeedback(feedback);
      this.feedbackSubmitted = true;
    }
  }

  isEverythingAnswered() {
    let questionsAnswered = true;

    if (this.isAnimalTesting === undefined) {
      document.getElementById('headerAnimalTest').className = 'red';
      questionsAnswered = false;
    }
    if (this.isSimilar === undefined) {
      document.getElementById('headerSimilar').className = 'red';
      questionsAnswered = false;
    }
    if (this.isRelevant === undefined) {
      document.getElementById('headerRelevant').className = 'red';
      questionsAnswered = false;
    }
    this.userMessage = (<HTMLTextAreaElement>document.getElementById('user-message')).value;
    if (!questionsAnswered) {
      setTimeout(function () {
        document.getElementById('headerAnimalTest').className = '';
        document.getElementById('headerSimilar').className = '';
        document.getElementById('headerRelevant').className = '';
      }, 2000);
    }
    return questionsAnswered;
  }

  close() {
    this.thisDialogRef.close('close');
  }
  goBack() {
    this.close();
  }

}
