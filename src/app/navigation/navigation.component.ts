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

  showNavigation() {
    const x = document.getElementById('navigation');
    if (x.className === 'middle') {
      x.className = 'middle responsive';
    } else {
      x.className = 'middle';
    }
  }
  hideResponsiveNavigation() {
    const x = document.getElementById('navigation');
    if (x.className === 'middle responsive') {
      x.className = 'middle';
    }
  }

}
