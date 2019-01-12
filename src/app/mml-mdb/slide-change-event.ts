import { Direction } from 'angular-bootstrap-md/angular-bootstrap-md/carousel/carousel.component';

export class SlideChangeEvent extends Event {
  direction: Direction;
  relatedTarget: number;
}
