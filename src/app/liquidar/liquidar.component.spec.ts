import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidarComponent } from './liquidar.component';

describe('LiquidarComponent', () => {
  let component: LiquidarComponent;
  let fixture: ComponentFixture<LiquidarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiquidarComponent]
    });
    fixture = TestBed.createComponent(LiquidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
