import { Component, OnInit, Input } from '@angular/core';
import { DataSection } from './data-section';

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.scss']
})
export class DataSectionComponent implements OnInit {

  @Input() useAltStyle?: boolean;
  @Input() dataSection: DataSection;

  constructor() { }

  ngOnInit() {
  }

}
