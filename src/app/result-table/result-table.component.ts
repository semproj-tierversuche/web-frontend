import {Component, Input, OnInit} from '@angular/core';
import { MiddlewareData } from '../common/middleware.data';
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
}
