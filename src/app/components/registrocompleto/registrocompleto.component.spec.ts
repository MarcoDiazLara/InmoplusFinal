import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocompletoComponent } from './registrocompleto.component';

describe('RegistrocompletoComponent', () => {
  let component: RegistrocompletoComponent;
  let fixture: ComponentFixture<RegistrocompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrocompletoComponent]
    });
    fixture = TestBed.createComponent(RegistrocompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
