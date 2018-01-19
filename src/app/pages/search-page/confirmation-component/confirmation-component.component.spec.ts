import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationComponentComponent } from './confirmation-component.component';

describe('ConfirmationComponentComponent', () => {
  let component: ConfirmationComponentComponent;
  let fixture: ComponentFixture<ConfirmationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
