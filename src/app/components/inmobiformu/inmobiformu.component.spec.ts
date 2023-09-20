import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiformuComponent } from './inmobiformu.component';

describe('InmobiformuComponent', () => {
  let component: InmobiformuComponent;
  let fixture: ComponentFixture<InmobiformuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InmobiformuComponent]
    });
    fixture = TestBed.createComponent(InmobiformuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
