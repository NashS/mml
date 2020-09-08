import { Observable } from 'rxjs';
import { BannerContentService } from './banner-content.service';
import { Router, ActivatedRoute, Event, ActivationEnd } from '@angular/router';
import { BannerContent } from './banner-content';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  private text$: Observable<BannerContent>;

  constructor(private location: Location, private router: Router, private bannerContentService: BannerContentService) { }

  ngOnInit() {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof ActivationEnd) {
          console.log('path passed: ' + this.location.path().split('/', 2)[1]);
          this.text$ = this.bannerContentService.getBannerContent(this.location.path().split('/', 2)[1]);
          console.log(this.text$);
        }
    });
  }

}
