import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Descarga1Component } from './descarga1.component';

describe('Descarga1Component', () => {
  let component: Descarga1Component;
  let fixture: ComponentFixture<Descarga1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Descarga1Component]
    });
    fixture = TestBed.createComponent(Descarga1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
