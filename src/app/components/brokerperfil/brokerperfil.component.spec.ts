import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerperfilComponent } from './brokerperfil.component';

describe('BrokerperfilComponent', () => {
  let component: BrokerperfilComponent;
  let fixture: ComponentFixture<BrokerperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrokerperfilComponent]
    });
    fixture = TestBed.createComponent(BrokerperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
