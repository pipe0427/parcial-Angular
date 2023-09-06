import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalcularImpuestoComponent } from './calcular-impuesto/calcular-impuesto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LiquidarComponent } from './liquidar/liquidar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CalcularImpuestoComponent,
    InicioComponent,
    LiquidarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
