import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactobrokerComponent } from './contactobroker.component';

describe('ContactobrokerComponent', () => {
  let component: ContactobrokerComponent;
  let fixture: ComponentFixture<ContactobrokerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactobrokerComponent]
    });
    fixture = TestBed.createComponent(ContactobrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
