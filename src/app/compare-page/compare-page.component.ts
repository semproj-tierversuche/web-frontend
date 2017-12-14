import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Result } from '../common/middleware.data';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent implements OnInit {

  inputArticle: Result;
  matchedArticle: Result;

  constructor(public thisDialogRef: MatDialogRef<ComparePageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {input: Result, matched: Result}) {
    this.inputArticle = data.input;
    this.matchedArticle = data.matched;
  }

  ngOnInit() {
  }

  close() {
    this.thisDialogRef.close('close');
  }

}
