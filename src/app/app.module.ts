import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import {RegistroModule} from './Registro/Registro.module';
import {VehiculoModule} from './Vehiculo/Vehiculo.module';
import {ProfesorModule}from './Profesor/Profesor.module';
import {PracticaModule}from './Practica/Practica.module';
import {EstudianteModule} from './Estudiante/Estudiante.module';
import {EncuestaModule} from './Encuesta/Encuesta.module';
import {UniversidadModule} from './universidad/universidad.module'
import {FranjaHorariaSemanalModule} from './franjaHorariaSemanal/franjaHorariaSemanal.module'
import {ConductorModule} from './conductor/conductor.module';
import {ReservaModule} from './Reserva/Reserva.module';
import {TipoVehiculoModule} from './TipoVehiculo/TipoVehiculo.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AgendaModule} from './Agenda/Agenda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroModule,
    VehiculoModule,
    ReservaModule,
    TipoVehiculoModule,
    ProfesorModule,
    PracticaModule,
    EstudianteModule,
    EncuestaModule,
    UniversidadModule,
    FranjaHorariaSemanalModule,
    ConductorModule,
    AgendaModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
