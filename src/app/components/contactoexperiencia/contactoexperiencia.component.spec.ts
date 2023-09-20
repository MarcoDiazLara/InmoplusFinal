import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoexperienciaComponent } from './contactoexperiencia.component';

describe('ContactoexperienciaComponent', () => {
  let component: ContactoexperienciaComponent;
  let fixture: ComponentFixture<ContactoexperienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoexperienciaComponent]
    });
    fixture = TestBed.createComponent(ContactoexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
