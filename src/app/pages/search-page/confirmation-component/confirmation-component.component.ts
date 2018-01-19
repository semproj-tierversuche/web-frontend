import { Component, OnInit, Inject, Input, Output, EventEmitter} from '@angular/core';
import { Origin } from '../../../common/middleware.data';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.css']
})
export class ConfirmationComponentComponent implements OnInit {

  metaData: Origin;
  // gets metaData from search-page component
  // @Input() metaData: Origin;
  // emmits to search-page component when user confirms
  userFonfirmed = false;

  constructor(public dialogRef: MatDialogRef<ConfirmationComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {metaData: Origin}) {
    this.metaData = data.metaData;
  }

  ngOnInit() { }

  /*close() {
    this.metaData = undefined;
  }*/

  goBack() {
    this.dialogRef.close();
  }



}
