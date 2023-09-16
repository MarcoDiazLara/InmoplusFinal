import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirimagenesComponent } from './subirimagenes.component';

describe('SubirimagenesComponent', () => {
  let component: SubirimagenesComponent;
  let fixture: ComponentFixture<SubirimagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirimagenesComponent]
    });
    fixture = TestBed.createComponent(SubirimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
