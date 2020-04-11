import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{RegistroModule} from './Registro/Registro.module';
import {VehiculoModule} from './Vehiculo/Vehiculo.module';
import {ProfesorModule}from './profesor/profesor.module';
import {PracticaModule}from './practica/practica.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroModule,
    VehiculoModule,
    ProfesorModule,
    PracticaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
