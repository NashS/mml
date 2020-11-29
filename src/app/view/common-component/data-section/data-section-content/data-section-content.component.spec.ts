import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSectionContentComponent } from './data-section-content.component';

describe('DataSectionContentComponent', () => {
  let component: DataSectionContentComponent;
  let fixture: ComponentFixture<DataSectionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSectionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
