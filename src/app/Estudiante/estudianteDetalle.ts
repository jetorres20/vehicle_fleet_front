import { Estudiante } from './Estudiante';
import { Reserva } from '../Reserva/Reserva';
import { Profesor } from '../Profesor/Profesor';

export class EstudianteDetalle extends Estudiante{

    reservas: Array<Reserva>;
    profesores: Array<Profesor>;

}