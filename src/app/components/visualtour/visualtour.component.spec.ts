import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualtourComponent } from './visualtour.component';

describe('VisualtourComponent', () => {
  let component: VisualtourComponent;
  let fixture: ComponentFixture<VisualtourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualtourComponent]
    });
    fixture = TestBed.createComponent(VisualtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
