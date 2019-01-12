import { SummarySection } from './summary-section';
import { StudioComponent } from './studio/studio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TestamonialsComponent } from './testamonials/testamonials.component';

export const SUMMARYSECTIONS: SummarySection[] = [
  {carouselImageSource: '/assets/images/Studio.jpg', headingString: 'The Studio', bodyRoute: 'studio', bodyComponent: StudioComponent},
  {carouselImageSource: '/assets/images/Studio.jpg', headingString: 'About Myself', bodyRoute: 'aboutMe', bodyComponent: AboutMeComponent},
  {carouselImageSource: '/assets/images/Studio.jpg', headingString: 'Testamonials', bodyRoute: 'testamonials',
   bodyComponent: TestamonialsComponent}
];
