import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcfunctionsComponent } from './calcfunctions.component';

describe('CalcfunctionsComponent', () => {
  let component: CalcfunctionsComponent;
  let fixture: ComponentFixture<CalcfunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcfunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
