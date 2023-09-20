import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarreasignarComponent } from './asignarreasignar.component';

describe('AsignarreasignarComponent', () => {
  let component: AsignarreasignarComponent;
  let fixture: ComponentFixture<AsignarreasignarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarreasignarComponent]
    });
    fixture = TestBed.createComponent(AsignarreasignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
