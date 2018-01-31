import { Component, OnInit } from '@angular/core';
import {MiddlewareData, Result} from '../../../common/middleware.data';
import { MiddlewareService} from '../../../services/middleware.service';
import {ComparePageComponent} from './compare-page/compare-page.component';
import { MatDialog } from '@angular/material';
import {FeedbackComponent} from './feedback/feedback.component';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  middlewareData: MiddlewareData;
  width: any;

  constructor(private middlewareService: MiddlewareService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.middlewareData = this.middlewareService.middlewareData;
  }

  OutputTypeOfTest (animalTest: string) {     // umwandeln des Begriffs 'both' in 'Animal and Alternative Test'
    if (animalTest === 'both') {
      return 'Animal and Alternative Test';
    }
    if (animalTest === 'yes') {
      return 'Animal Test';
    }
    if (animalTest === 'no') {
      return 'Alternative Test';
    }
  }

  openCompareView(data: Result) {
    const inputPublication = this.middlewareData.Origin;
    this.middlewareService.currentResult = data;
    this.dialog.open(ComparePageComponent, {
      panelClass: 'compare-page-dialog',
      data: { input: inputPublication,
        matched: data }
    });
  }
  openFeedback(data: Result) {
    this.dialog.open(FeedbackComponent, {
      panelClass: 'feedback-dialog'
    });
  }

  ChangePercetageBarWidth(Percentage: number) {
    return Percentage * 100;
  }

}
