import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Origin } from '../common/middleware.data';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.css']
})
export class ConfirmationComponentComponent implements OnInit {

  // gets metaData from searchpage component
  @Input() metaData: Origin;
  // emmits to searchpage component when user confirms
  @Output() userConfirmed = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  close() {
    this.metaData = undefined;
  }

  confirm() {
    this.userConfirmed.emit();
  }



}
