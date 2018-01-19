import { Component, OnInit } from '@angular/core';
import {MiddlewareService} from '../../../services/middleware.service';
import {MiddlewareData} from '../../../common/middleware.data';

@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.css']
})
export class PrintViewComponent implements OnInit {

  resultData: MiddlewareData;

  constructor(public middlewareService: MiddlewareService) { }

  ngOnInit() {
    this.resultData = this.middlewareService.middlewareData;
  }

}
