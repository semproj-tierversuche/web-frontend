///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit} from '@angular/core';
import { Origin, Result } from '../common/middleware.data';
import { Router } from '@angular/router';
import { MiddlewareService } from '../services/middleware.service';
import { MatDialog } from '@angular/material';
import {ComparePageComponent} from '../compare-page/compare-page.component';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  pmid: number;
  metaData: Origin;

  constructor(public router: Router, public middlewareService: MiddlewareService,
  public dialog: MatDialog) { }

  ngOnInit() { }

  // recieves pmid from searchField component -EventEmitter
  recievePmid($event) {
    this.pmid = $event;
    if (this.pmid != null) {
       this.getResponse(this.pmid);
    } else {
      this.metaData = undefined;
    }
  }

  // call method from middleWareService for EXAMPLE metadata and save it to this.metaData
  getResponse(pmid: number) {
    this.middlewareService.getExampleInputMetaData(pmid).subscribe(res => this.metaData = res);
  }

  userConfirmed() {
    this.router.navigate(['/result', this.pmid]);
  }

  // compare page as a dialog - has to be transfered to resultpage
  openDialog(inputPublication: Result, matchedPublication: Result) {
    this.dialog.open(ComparePageComponent, {
      height: '600px',
      width: '700px',
      data: { input: inputPublication,
        matched: matchedPublication }
    });
  }
}
