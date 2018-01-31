import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MiddlewareData} from '../../common/middleware.data';
import {MiddlewareService} from '../../services/middleware.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  middlewareData: MiddlewareData;
  pmid: number;
  private sub: any;
  showLoadingAnimation = false;

  constructor(private route: ActivatedRoute, private middlewareDataService: MiddlewareService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      if (params.hasOwnProperty('id')) {
        this.pmid = +params['id'];
        // This is to check if we came from navigation bar
        if (this.pmid !== 0) {
          this.showLoadingAnimation = true;
          this.middlewareDataService.getResults(this.pmid).subscribe(data => {
            this.middlewareData = data;
            // Maybe we should just let service do all the work
            this.middlewareDataService.confirmMiddlewareData(data);
            this.showLoadingAnimation = false;
          });
        }
      }
    });
  }

}
