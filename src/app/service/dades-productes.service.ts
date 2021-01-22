import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IProducte } from '../interfaces/iproducte';

@Injectable({
  providedIn: 'root',
})
export class DadesProductesService {
  //incorporar al producte service un servei http 
  constructor(private _http: HttpClient) { } 
  getDades(): Observable<IProducte[]> {
    return this._http.get<IProducte[]>('http://localhost/M14/M14_Ac3/public/index.php/api/productes');  
         //get retorna un observable   
        }
    
    productes: IProducte[] = [];
      
    
}
