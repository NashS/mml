import { Component, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataSection } from './data-section';

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.scss']
})
export class DataSectionComponent implements AfterViewInit {

  @Input() useAltStyle?: boolean;
  @Input() dataSection: DataSection;
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.dataSection.component != null) {
      const componentFactory = this.resolver.resolveComponentFactory(this.dataSection.component);
      this.viewContainer.createComponent(componentFactory);
      this.cdr.detectChanges();
    }
  }

}
