import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formu4Component } from './formu4.component';

describe('Formu4Component', () => {
  let component: Formu4Component;
  let fixture: ComponentFixture<Formu4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formu4Component]
    });
    fixture = TestBed.createComponent(Formu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
