import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInventariosComponent } from './agregar-inventarios.component';

describe('AgregarInventariosComponent', () => {
  let component: AgregarInventariosComponent;
  let fixture: ComponentFixture<AgregarInventariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarInventariosComponent]
    });
    fixture = TestBed.createComponent(AgregarInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
