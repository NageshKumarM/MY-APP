import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Market3Component } from './market3.component';

describe('Market3Component', () => {
  let component: Market3Component;
  let fixture: ComponentFixture<Market3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Market3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Market3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
