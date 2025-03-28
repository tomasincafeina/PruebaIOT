import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../service/datos.service';
import { AulaService } from '../../service/aula.service';
import { Dato } from '../../interfaces/dato.interface';
import { DatosAulaComponent } from "../../components/datosAula/datosAula.component";
import { map, of } from 'rxjs';


@Component({
  selector: 'app-home-page',
  imports: [DatosAulaComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  datosService = inject(DatosService);

  aulaService = inject(AulaService);

  router = inject(Router);

  activatedRoute = inject(ActivatedRoute);

  selectedAula = this.aulaService.aulaActual
  
  aulaDatosResource = rxResource({
    request: () => ({ aula: this.selectedAula }),
    loader: ({ request }) => {
      if (!request.aula) return of([]);
      this.router.navigate(['home'], {
        queryParams: {
          aula: request.aula,
        },
      });
      return this.datosService.getDatosByAula(request.aula);
    },
  });

  //supuestamente actualiza 
  tickingEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      console.log('tick');
      this.aulaDatosResource.reload() // Refresh the resource on each tick
    }, 1000);
    onCleanup(() => {
      clearInterval(interval);
    });
  });

}
