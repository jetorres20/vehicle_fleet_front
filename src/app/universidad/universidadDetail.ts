import { Estudiante } from '../Estudiante/Estudiante';
import { Profesor } from '../Profesor/Profesor';
import { Universidad } from './universidad';

export class UniversidadDetail extends Universidad{

    estudiantes: Array<Estudiante>;
    profesores: Array<Profesor>;
}
