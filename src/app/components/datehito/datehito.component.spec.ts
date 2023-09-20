import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatehitoComponent } from './datehito.component';

describe('DatehitoComponent', () => {
  let component: DatehitoComponent;
  let fixture: ComponentFixture<DatehitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatehitoComponent]
    });
    fixture = TestBed.createComponent(DatehitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
