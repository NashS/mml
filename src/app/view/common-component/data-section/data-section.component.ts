import { Component,
         Input,
         ComponentFactoryResolver,
         ViewContainerRef,
         AfterViewInit,
         ChangeDetectorRef,
         ViewChildren,
         QueryList } from '@angular/core';
import { DataSection } from './data-section';

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.scss']
})
export class DataSectionComponent implements AfterViewInit {

  @Input() useAltStyle?: boolean;
  @Input() dataSection: DataSection;
  @ViewChildren('viewContainer', {read: ViewContainerRef}) viewContainers: QueryList<ViewContainerRef>;

  constructor(private resolver: ComponentFactoryResolver,
              private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.dataSection.component != null) {
      const componentFactory = this.resolver.resolveComponentFactory(this.dataSection.component);
      this.viewContainers.map( (vcr: ViewContainerRef) => vcr.createComponent(componentFactory) );
      this.cdr.detectChanges();
    }
  }
}
