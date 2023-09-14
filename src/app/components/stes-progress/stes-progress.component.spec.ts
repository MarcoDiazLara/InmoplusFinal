import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StesProgressComponent } from './stes-progress.component';

describe('StesProgressComponent', () => {
  let component: StesProgressComponent;
  let fixture: ComponentFixture<StesProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StesProgressComponent]
    });
    fixture = TestBed.createComponent(StesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
