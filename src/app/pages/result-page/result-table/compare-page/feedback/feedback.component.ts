import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  checkAnimalTesting(userSelection) {
    this.isAnimalTesting = userSelection;
    if (userSelection === true) {
      document.getElementById('animal-testing-yes').style.backgroundColor = '#4CAF50';
      document.getElementById('animal-testing-no').style.backgroundColor = 'white';
    }
    if (userSelection === false) {
      document.getElementById('animal-testing-yes').style.backgroundColor = 'white';
      document.getElementById('animal-testing-no').style.backgroundColor = '#fa8686';
    }
  }

  checkSimilar(userSelection) {
    this.isSimilar = userSelection;
    if (userSelection === true) {
      document.getElementById('similar-yes').style.backgroundColor = '#4CAF50';
      document.getElementById('similar-no').style.backgroundColor = 'white';
    }
    if (userSelection === false) {
      document.getElementById('similar-yes').style.backgroundColor = 'white';
      document.getElementById('similar-no').style.backgroundColor = '#fa8686';
    }
  }

  checkRelevant(userSelection) {
    this.isRelevant = userSelection;
    if (userSelection === true) {
      document.getElementById('relevant-yes').style.backgroundColor = '#4CAF50';
      document.getElementById('relevant-no').style.backgroundColor = 'white';
    }
    if (userSelection === false) {
      document.getElementById('relevant-yes').style.backgroundColor = 'white';
      document.getElementById('relevant-no').style.backgroundColor = '#fa8686';
    }
  }

  submitFeedback() {
    if (this.isEverythingAnswered()) {
      // save feedbackReview somewhere after
      const feedbackReview = 'AnimalTesting: ' + this.isAnimalTesting + '\n' +
        'Similarity:' + this.isSimilar + '\n' +
        'Relevancy:' + this.isRelevant + '\n' +
        'Message:' + this.userMessage + '\n';
      this.feedbackSubmitted = true;
    }
  }

  isEverythingAnswered() {
     let questionsAnswered = true;

    if (this.isAnimalTesting === undefined) {
      document.getElementById('headerAnimalTest').style.color = '#C70039';
      questionsAnswered = false;
    }
    if (this.isSimilar === undefined) {
      document.getElementById('headerSimilar').style.color = '#C70039';
      questionsAnswered = false;
    }
    if (this.isRelevant === undefined) {
      document.getElementById('headerRelevant').style.color = '#C70039';
      questionsAnswered = false;
    }

    this.userMessage = (<HTMLTextAreaElement>document.getElementById('user-message')).value;

    setTimeout(function () {
      document.getElementById('headerAnimalTest').style.color = '#ffffff';
      document.getElementById('headerSimilar').style.color = '#ffffff';
      document.getElementById('headerRelevant').style.color = '#ffffff';
    }, 2000);

    return questionsAnswered;
  }

  goBack() {
    document.getElementById('container').scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    document.getElementById('container').style.overflowY = 'hidden';
  }

}
