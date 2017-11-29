///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit} from '@angular/core';
import { Origin } from '../common/middleware.data';
import { Router } from '@angular/router';
import { MiddlewareService} from '../services/middleware.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  pmid: number;
  metaData: Origin;

  constructor(public router: Router, public middlewareService: MiddlewareService) { }

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

  // call method from middleWareService for metadata and save it to this.metaData
  getResponse(pmid: number) {
    this.middlewareService.getInputMetaData(pmid).subscribe(res => this.metaData = res);
  }

  userConfirmed() {
    this.router.navigate(['/result', this.pmid]);
  }

}
