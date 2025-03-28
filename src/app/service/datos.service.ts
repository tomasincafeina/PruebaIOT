import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dato } from '../interfaces/dato.interface';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private datos: Dato[] = [
    { id: 1, nombre: 'Sensor1', aula: 'A1', dato: 25 },
    { id: 2, nombre: 'Sensor2', aula: 'A2', dato: 42 },
    { id: 3, nombre: 'Sensor3', aula: 'A3', dato: 78 },
  ];
  
  getAllDatos(): Observable<Dato[]> {
    return of(this.datos);
  }
  getDatosByAula(aula: string): Observable<Dato[]> {
    return of(this.datos.filter((dato) => dato.aula === aula));
  }
  


  //metodo servicio ejemplo
  // searchByCapital(query: string): Observable<Country[]>{
  //   query = query.toLowerCase();
  //   return this.http
  //   .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
  //   .pipe(
  //     map((restCountries) => CountryMapper.mapRESTCountryToCountryArray(restCountries)),
  //     catchError(error =>{
  //       console.log('Error: ',error);
  //       return throwError(() => new Error(`No se pudo obtener paises: ${query}`))
  //     })
  //   );
}
