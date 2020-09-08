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

  ngOnInit() {}

}
