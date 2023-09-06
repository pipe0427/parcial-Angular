import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calcular-impuesto',
  templateUrl: './calcular-impuesto.component.html',
  styleUrls: ['./calcular-impuesto.component.css']
})
export class CalcularImpuestoComponent {
  @Input() placa:any = ""
  @Input() anio:any = ""
  @Output() total = new EventEmitter<number>()
  resultado: number = 0

  calcularImpuesto(){
    if(this.anio < 1980){
      this.resultado = this.anio * 112
      this.total.emit(this.resultado)
    }else if(this.anio >= 1980){
      this.resultado = this.anio * 589
      this.total.emit(this.resultado)
    }
  }
}
