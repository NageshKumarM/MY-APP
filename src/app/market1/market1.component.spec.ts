import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Market1Component } from './market1.component';

describe('Market1Component', () => {
  let component: Market1Component;
  let fixture: ComponentFixture<Market1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Market1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Market1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
