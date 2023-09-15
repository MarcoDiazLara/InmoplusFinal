import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesdeofrecerComponent } from './perfilesdeofrecer.component';

describe('PerfilesdeofrecerComponent', () => {
  let component: PerfilesdeofrecerComponent;
  let fixture: ComponentFixture<PerfilesdeofrecerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilesdeofrecerComponent]
    });
    fixture = TestBed.createComponent(PerfilesdeofrecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
