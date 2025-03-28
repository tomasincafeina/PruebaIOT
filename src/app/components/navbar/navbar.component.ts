import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { AulaService } from '../../service/aula.service';
import {rxResource } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  aulaService = inject(AulaService);
  aulaActual = signal(this.aulaService.aulaActual)
  router = inject(Router);
  
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('aula') ?? '';
    
  selectedAula = linkedSignal<string>(
    () => (this.queryParam) || this.aulaService.aulaActual
  );
  aulas = signal(this.aulaService.getAllAulas())

  changeAula(aula: string) {
    this.aulaService.aulaActual = aula
    this.selectedAula.set(aula);
    this.aulaActual.set(aula)
    this.router.navigate([], {
      queryParams: { aula },
    });
    window.location.reload()
  }

}
