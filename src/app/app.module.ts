import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{RegistroModule} from './Registro/Registro.module';
import {VehiculoModule} from './Vehiculo/Vehiculo.module';
import {ProfesorModule}from './Profesor/Profesor.module';
import {PracticaModule}from './Practica/Practica.module';
import {EstudianteModule} from './Estudiante/Estudiante.module';
import {EncuestaModule} from './Encuesta/Encuesta.module';

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
    EstudianteModule,
    EncuestaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
