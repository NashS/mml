import { BannerContent } from './banner-content';
import { BANNERCONTENTS } from './mock-banner-content';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { shareReplay, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannerContentService {

  constructor() { }

  private _getBannerContent(): Observable<Map<string, BannerContent>> {
    return of(BANNERCONTENTS);
  }

  getBannerContent(key: string): Observable<BannerContent> {

    return this._getBannerContent()
      .pipe(
        shareReplay(),
        map(bannerContentMap => bannerContentMap.get(key)),
        startWith({title: '', content: ''})
      );
  }
}
