import { Agenda } from '../Agenda/Agenda';
import { conductor } from './conductor';
import { FranjaHorariaSemanal } from '../franjaHorariaSemanal/franjaHorariaSemanal';

export class ConductorDetail extends conductor{

    agendas: Array<Agenda>;
    franjasH: Array<FranjaHorariaSemanal>;

}
