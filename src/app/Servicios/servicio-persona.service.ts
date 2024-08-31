import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';
import { ProgramaDTO } from '../Modelos/ProgramaDTO';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  private apiURL=environment.apiURL+'programa';
  constructor(private http:HttpClient) { }

  public obtenerPrograma():Observable<ProgramaDTO[]>{
    
    return this.http.get<ProgramaDTO[]>(this.apiURL);
  }

  
}
