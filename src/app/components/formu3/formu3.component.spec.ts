import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formu3Component } from './formu3.component';

describe('Formu3Component', () => {
  let component: Formu3Component;
  let fixture: ComponentFixture<Formu3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formu3Component]
    });
    fixture = TestBed.createComponent(Formu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
