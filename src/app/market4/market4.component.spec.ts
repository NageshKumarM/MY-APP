import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Market4Component } from './market4.component';

describe('Market4Component', () => {
  let component: Market4Component;
  let fixture: ComponentFixture<Market4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Market4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Market4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
