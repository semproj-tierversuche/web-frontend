import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MiddlewareService} from '../services/middleware.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public router: Router, public middlewareDataService: MiddlewareService) { }

  ngOnInit() {
  }

}
