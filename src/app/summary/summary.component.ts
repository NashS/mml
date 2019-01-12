import { SummarySectionService } from './sections/summary-section.service';
import { Component, OnInit } from '@angular/core';
import { SlideChangeEvent } from '../mml-mdb/slide-change-event';
import { SummarySection } from './sections/summary-section';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: [ './summary.component.scss', '../app.component.scss' ]
})
export class SummaryComponent implements OnInit {

  summarySections: SummarySection[];
  summaryRoute: Route;

  constructor(private route: ActivatedRoute, private router: Router, private summarySectionService: SummarySectionService) { }

  ngOnInit() {
    this.summarySectionService.getSummarySections().subscribe(summarySections => {
      this.summarySections = summarySections;
      this.summaryRoute = this.router.config.find(route => route.path === 'summary');
      for (const summarySection of this.summarySections) {
        this.summaryRoute.children.push({path: summarySection.bodyRoute, component: summarySection.bodyComponent});
      }
      this.summaryRoute.children.push({path: '', redirectTo: this.summarySections[0].bodyRoute, pathMatch: 'full'});
      this.router.navigate([this.summaryRoute.children[0].path], {relativeTo: this.route});
      console.log(this.router.config);
    });
  }

  onActiveSlideChange(event: SlideChangeEvent) {
    console.log(event);
    this.router.navigate([this.summaryRoute.children[event.relatedTarget].path], {relativeTo: this.route});
  }

}
