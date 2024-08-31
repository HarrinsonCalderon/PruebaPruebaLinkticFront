import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { MateriaDTO } from '../Modelos/MateriaDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMateriaService {
  private apiURL=environment.apiURL+'materia';
  constructor(private http:HttpClient) { }

  public obtenerMateria():Observable<MateriaDTO[]>{
    var datos=this.http.get<MateriaDTO[]>(this.apiURL+"/GetMateria");
    return datos
  }
  

}
