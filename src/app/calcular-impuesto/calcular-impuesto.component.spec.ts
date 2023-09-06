import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularImpuestoComponent } from './calcular-impuesto.component';

describe('CalcularImpuestoComponent', () => {
  let component: CalcularImpuestoComponent;
  let fixture: ComponentFixture<CalcularImpuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcularImpuestoComponent]
    });
    fixture = TestBed.createComponent(CalcularImpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
