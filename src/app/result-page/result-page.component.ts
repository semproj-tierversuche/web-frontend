import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiddlewareData } from '../common/middleware.data';
import { MiddlewareService} from '../services/middleware.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  example: MiddlewareData;
  pmid: number;
  private sub: any;

  constructor(private route: ActivatedRoute,  private MiddlewareDataService: MiddlewareService ) { }

  ngOnInit() {
    this.getMiddlewareDataService();
    this.sub = this.route.params.subscribe(params => {
      this.pmid = +params['pmid'];
      // dispatch action to load the details here.
    });
  }
  getMiddlewareDataService(): void {
    this.example = this.MiddlewareDataService.getExampleResults();
  }


}
