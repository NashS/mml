import { Component, OnInit } from '@angular/core';
import { DataSectionService } from '../common-component/data-section/data-section.service';
import { DataSection } from '../common-component/data-section/data-section';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: [ './summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summarySections: DataSection[];

  constructor(private dataSectionService: DataSectionService) { }

  ngOnInit() {
    this.dataSectionService.getSummarySections().subscribe(summarySections => {
      this.summarySections = summarySections;
    });
  }

}
