///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit, ViewChild} from '@angular/core';
import { Origin, Result } from '../common/middleware.data';
import { Router } from '@angular/router';
import { MiddlewareService } from '../services/middleware.service';
import { MatDialog } from '@angular/material';
import {ConfirmationComponentComponent} from '../confirmation-component/confirmation-component.component';
import {SearchFieldComponent} from '../search-field/search-field.component';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  pmid: number;
  metaData: Origin;
  @ViewChild(SearchFieldComponent) searchField: SearchFieldComponent;
  showLoadingAnimation = false;

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

  // call method from middleWareService for metadata and save it to this.metaData
  getResponse(pmid: number) {
    this.showLoadingAnimation = true;
    this.middlewareService.getInputMetaData(pmid).subscribe(
      res => { this.metaData = res,
        this.openConfirmationDialog(),
        this.showLoadingAnimation = false; },
      error => { this.searchField.showErrorMessage(),
        this.showLoadingAnimation = false; });
  }


  userConfirmed() {
    this.router.navigate(['/result', this.pmid]);
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationComponentComponent, {
      panelClass: 'confirmation-dialog',
      data: { metaData: this.metaData }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === true) {
        this.userConfirmed();
      }
    });
  }

}
