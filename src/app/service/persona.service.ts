import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})

/*desde donde toma el front la base de datos la informacion*/
export class PersonaService {
  URL='https://backend-portfolio-web-sgr.herokuapp.com/persona/';

/**constructor del servicio toma el metodo de netbeans */
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
