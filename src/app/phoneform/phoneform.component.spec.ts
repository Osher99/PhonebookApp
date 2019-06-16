import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneformComponent } from './phoneform.component';

describe('PhoneformComponent', () => {
  let component: PhoneformComponent;
  let fixture: ComponentFixture<PhoneformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
