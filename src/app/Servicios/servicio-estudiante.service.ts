import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { EstudianteActualizacionDTO, EstudianteClasesDTO, EstudianteCreacionDTO, EstudianteProgramaDTO } from '../Modelos/EstudianteDTO';
import { EstudianteClaseDTO } from '../Modelos/EstudianteClaseDTO';
@Injectable({
  providedIn: 'root'
})
export class ServicioEstudianteService {
  private apiURL=environment.apiURL+'estudiante/';
  constructor(private http:HttpClient) { }

  public PostEstudiante(e:EstudianteCreacionDTO ):Observable<any>{
    
    return this.http.post<EstudianteCreacionDTO[]>(this.apiURL+"PostEstudiante",e);
  }

  public PostEstudianteActualizar(e:EstudianteActualizacionDTO ):Observable<any>{
    
    return this.http.post<EstudianteActualizacionDTO[]>(this.apiURL+"PostEstudianteActualizar",e);
  }


  public GetEstudiantePrograma( ):Observable<EstudianteProgramaDTO[]>{

    var datos=this.http.get<EstudianteProgramaDTO[]>(this.apiURL+"GetEstudiantePrograma");
    return datos;
  }
  public GetEstudianteProgramaId(id:any):Observable<EstudianteProgramaDTO[]>{

    var datos=this.http.get<EstudianteProgramaDTO[]>(this.apiURL+"GetEstudiantePrograma?id="+id);
    return datos;
  }

  public GetEstudiantClase(id:any):Observable<EstudianteClasesDTO[]>{

    var datos=this.http.get<EstudianteClasesDTO[]>(this.apiURL+"GetEstudiantClase?id="+id);
    return datos;
  }


 
  public DeleteEliminarEstudiante(e:EstudianteActualizacionDTO ):Observable<any>{
    
    return this.http.post<EstudianteActualizacionDTO[]>(this.apiURL+"DeleteEstudiante",e);
  }
   
}
