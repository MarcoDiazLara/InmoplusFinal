import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInmComponent } from './details-inm.component';

describe('DetailsInmComponent', () => {
  let component: DetailsInmComponent;
  let fixture: ComponentFixture<DetailsInmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsInmComponent]
    });
    fixture = TestBed.createComponent(DetailsInmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
