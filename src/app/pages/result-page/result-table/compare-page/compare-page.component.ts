import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Origin, Result } from '../../../../common/middleware.data';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent implements OnInit {

  inputArticle: Origin;
  matchedArticle: Result;
  score: number;

  constructor(public thisDialogRef: MatDialogRef<ComparePageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {input: Origin, matched: Result}) {
    this.inputArticle = data.input;
    this.matchedArticle = data.matched;
    this.score = data.matched.Matching.Relevance*100;
  }

  ngOnInit() {
  }

  close() {
    this.thisDialogRef.close('close');
  }

  showFeedback() {
    document.getElementById('container').scrollTo({ left: 0, top: 648, behavior: 'smooth' });
    document.getElementById('container').style.overflowY = 'scroll';
  }

}
