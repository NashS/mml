import { Injectable } from '@angular/core';
import { SUMMARYSECTIONS } from './mock-summary-sections';
import { of, Observable } from 'rxjs';
import { SummarySection } from './summary-section';

@Injectable({
  providedIn: 'root'
})
export class SummarySectionService {

  constructor() { }

  getSummarySections(): Observable<SummarySection[]> {
    return of(SUMMARYSECTIONS);
  }
}
