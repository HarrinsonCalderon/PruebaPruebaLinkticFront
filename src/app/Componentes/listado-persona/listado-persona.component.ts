import { Component, OnInit } from '@angular/core';
import { AtributoDTO, EstudianteActualizacionDTO, EstudianteCreacionDTO, EstudianteDTO, EstudianteProgramaDTO } from 'src/app/Modelos/EstudianteDTO';
import { ServicioEstudianteService } from 'src/app/Servicios/servicio-estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit{

  estudianteDTO:EstudianteProgramaDTO[]=[]
  atributo:AtributoDTO;
ngOnInit(): void {

  this.obternerEstudiantePrograma();
  
}
constructor(private ServicioEstudianteService:ServicioEstudianteService){
  this.atributo=new AtributoDTO();
}

obternerEstudiantePrograma(){
   
    this.ServicioEstudianteService.GetEstudiantePrograma().subscribe(estudiante=>{
      //console.log("->",estudiante);
       this.estudianteDTO=estudiante;
     });
 
}
EliminarEstudiante(id:any){
 
  let e:EstudianteActualizacionDTO=new EstudianteActualizacionDTO();
   e.Id=id;
  this.ServicioEstudianteService.DeleteEliminarEstudiante(e).subscribe(estudiante=>{
    
    if(estudiante!="1"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puedo eliminar el estudiante." 
      });
    }else{
      Swal.fire({
        title: "Correcto",
        text: "Estudiante Eliminado...",
        icon: "success"
      });
    }
    this.obternerEstudiantePrograma();
   });
}

}
