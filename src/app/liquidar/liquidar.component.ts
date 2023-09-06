import { Component } from '@angular/core';

@Component({
  selector: 'app-liquidar',
  templateUrl: './liquidar.component.html',
  styleUrls: ['./liquidar.component.css']
})
export class LiquidarComponent {
  placa:any = ""
  marca:any = ""
  modelo:any = ""
  anio:any = ""
  valorAPagar:any = ""
  mostrar:boolean = false
  placaNew:any = ""
  anioNew:any = ""

  calculo(total:any){
    this.valorAPagar = total
    if(this.mostrar){
      this.mostrar = false
      this.placaNew = this.placa
      this.anioNew = this.anio
    }else{
      this.mostrar = true
      this.placaNew = this.placa
      this.anioNew = this.anio
    }
    this.limpiarCampos
  }
  limpiarCampos(){
    this.placa = ""
    this.anio  = ""
    this.modelo = ""
    this.marca = ""
  }
}
