import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brokerpage1Component } from './brokerpage1.component';

describe('Brokerpage1Component', () => {
  let component: Brokerpage1Component;
  let fixture: ComponentFixture<Brokerpage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Brokerpage1Component]
    });
    fixture = TestBed.createComponent(Brokerpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
