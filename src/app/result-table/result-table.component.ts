import { Component, OnInit } from '@angular/core';
import { MiddlewareData } from '../common/middleware.data';
import { MiddlewareService} from '../services/middleware.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  example: MiddlewareData;
  constructor(private MiddlewareDataService: MiddlewareService) {
  }
  ngOnInit() {
    this.getMiddlewareDataService();
  }
  getMiddlewareDataService(): void {
    this.example = this.MiddlewareDataService.getExampleResults();
  }

}
