import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarperfilComponent } from './eliminarperfil.component';

describe('EliminarperfilComponent', () => {
  let component: EliminarperfilComponent;
  let fixture: ComponentFixture<EliminarperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarperfilComponent]
    });
    fixture = TestBed.createComponent(EliminarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
