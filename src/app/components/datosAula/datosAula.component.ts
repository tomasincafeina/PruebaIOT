import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Dato } from '../../interfaces/dato.interface';

@Component({
  selector: 'app-datos-aula',
  imports: [],
  templateUrl: './datosAula.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatosAulaComponent { 
  
  datos = input.required<Dato[]> ()

}
