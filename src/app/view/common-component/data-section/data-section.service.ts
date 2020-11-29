import { Injectable } from '@angular/core';
import { SUMMARYSECTIONS, ABOUTUSSECTIONS } from './mock-data-sections';
import { of, Observable } from 'rxjs';
import { DataSection } from './data-section';

@Injectable({
  providedIn: 'root'
})
export class DataSectionService {

  constructor() { }

  getSummarySections(): Observable<DataSection[]> {
    return of(SUMMARYSECTIONS);
  }

  getAboutUsSections(): Observable<DataSection[]> {
    return of(ABOUTUSSECTIONS);
  }
}
