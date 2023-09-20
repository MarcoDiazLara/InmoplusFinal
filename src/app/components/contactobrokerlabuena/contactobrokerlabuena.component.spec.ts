import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactobrokerlabuenaComponent } from './contactobrokerlabuena.component';

describe('ContactobrokerlabuenaComponent', () => {
  let component: ContactobrokerlabuenaComponent;
  let fixture: ComponentFixture<ContactobrokerlabuenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactobrokerlabuenaComponent]
    });
    fixture = TestBed.createComponent(ContactobrokerlabuenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
