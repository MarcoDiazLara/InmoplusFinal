import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldandVarComponent } from './fieldand-var.component';

describe('FieldandVarComponent', () => {
  let component: FieldandVarComponent;
  let fixture: ComponentFixture<FieldandVarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldandVarComponent]
    });
    fixture = TestBed.createComponent(FieldandVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
