import { Component, OnInit } from '@angular/core';
import {MiddlewareData, Result} from '../common/middleware.data';
import { MiddlewareService} from '../services/middleware.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  middlewareData: MiddlewareData;

  constructor(private middlewareService: MiddlewareService) {
  }

  ngOnInit() {
    this.middlewareData = this.middlewareService.middlewareData;
  }
  getMiddlewareDataService(): void {
    this.middlewareData = this.MiddlewareDataService.getExampleResults();
  }
  OutputTypeOfTest (animalTest: string) {     // umwandeln des Begriffs 'both' in 'Animal and Alternative Test'
    if (animalTest === 'both') {
      return 'Animal and Alternative Test';
    } else {
      return animalTest;
    }
  }
  compareClick(data: Result) {                // hier kommt man durch das Klicken auf die Lupe hin
  }
}
