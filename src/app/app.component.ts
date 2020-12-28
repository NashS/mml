import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';
import { Component , OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public opened: boolean;

  ngOnInit(): void {
      if (!isPlatformBrowser(this.platformId)) {
          const bases = this.document.getElementsByTagName('base');
          if (bases.length > 0) {
              bases[0].setAttribute('href', environment.baseHref);
          }
      }
      this.mediaObserver.asObservable()
      .subscribe((changes: MediaChange[]) => {
        if(changes.some(change => change.mqAlias === 'gt-xs')) {
          this.opened = false;
        }
      });

  }

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: any,
              private mediaObserver: MediaObserver) {}

}
