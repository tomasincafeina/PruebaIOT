import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AulaService {
  private aulas: string[] = ['A1', 'A2', 'A3'];

  activatedRoute = inject(ActivatedRoute);

  getAllAulas(): string[]{
    return this.aulas
  }

  get aulaActual(): string {
    return localStorage.getItem('aulaActual') || 'A2';
  }
  set aulaActual(value: string){
    localStorage.setItem('aulaActual', value);
  }
  setAulaActual(aula: string){
    this.aulaActual = aula
  }

}
