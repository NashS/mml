import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmlAgmComponent } from './mml-agm.component';

describe('MmlAgmComponent', () => {
  let component: MmlAgmComponent;
  let fixture: ComponentFixture<MmlAgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmlAgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmlAgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
