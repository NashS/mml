import { Component, OnInit } from '@angular/core';
import { DataSectionService } from '../common-component/data-section/data-section.service';
import { DataSection } from '../common-component/data-section/data-section';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUsSections: DataSection[];

  constructor(private dataSectionService: DataSectionService) { }

  ngOnInit() {
    this.dataSectionService.getAboutUsSections().subscribe(aboutUsSections => {
      this.aboutUsSections = aboutUsSections;
    });
  }

}
