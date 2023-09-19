import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarralateralmenuComponent } from './barralateralmenu.component';

describe('BarralateralmenuComponent', () => {
  let component: BarralateralmenuComponent;
  let fixture: ComponentFixture<BarralateralmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarralateralmenuComponent]
    });
    fixture = TestBed.createComponent(BarralateralmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
