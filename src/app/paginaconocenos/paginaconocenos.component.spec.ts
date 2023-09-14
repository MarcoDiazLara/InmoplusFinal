import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaconocenosComponent } from './paginaconocenos.component';

describe('PaginaconocenosComponent', () => {
  let component: PaginaconocenosComponent;
  let fixture: ComponentFixture<PaginaconocenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaconocenosComponent]
    });
    fixture = TestBed.createComponent(PaginaconocenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
