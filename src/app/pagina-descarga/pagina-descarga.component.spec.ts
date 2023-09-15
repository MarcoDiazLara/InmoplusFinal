import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDescargaComponent } from './pagina-descarga.component';

describe('PaginaDescargaComponent', () => {
  let component: PaginaDescargaComponent;
  let fixture: ComponentFixture<PaginaDescargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDescargaComponent]
    });
    fixture = TestBed.createComponent(PaginaDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
