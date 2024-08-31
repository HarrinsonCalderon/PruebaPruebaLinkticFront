import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteClaseDTO } from 'src/app/Modelos/EstudianteClaseDTO';
import { EstudianteCreacionDTO } from 'src/app/Modelos/EstudianteDTO';
import { MateriaDTO } from 'src/app/Modelos/MateriaDTO';
import { ProgramaDTO } from 'src/app/Modelos/ProgramaDTO';
import { ServicioEstudianteService } from 'src/app/Servicios/servicio-estudiante.service';
import { ServicioMateriaService } from 'src/app/Servicios/servicio-materia.service';
import { ServicioPersonaService } from 'src/app/Servicios/servicio-persona.service';
import { ServicioProgramaService } from 'src/app/Servicios/servicio-programa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-persona',
  templateUrl: './gestionar-persona.component.html',
  styleUrls: ['./gestionar-persona.component.css']
})
export class GestionarPersonaComponent implements OnInit {

form:FormGroup;
materiaDTO:MateriaDTO[]=[];
programaDTO:ProgramaDTO[]=[];
selectedPrograma: any;
estudianteCreacion:EstudianteCreacionDTO;
 ngOnInit(): void {
  this.cargarProgramas();
  this.cargarMaterias();
 }
 constructor(private fb:FormBuilder, private  servicioPersona:ServicioPersonaService, 
  private servicioProgramaService:ServicioProgramaService,
  private ServicioMateriaService:ServicioMateriaService,
  private ServicioEstudianteService:ServicioEstudianteService
 ){
 
 this.estudianteCreacion=new EstudianteCreacionDTO();
   this.form=this.fb.group({
     Nombre:['',Validators.required],
     Programaselect:[''],

   })
 
    
 }

 cargarProgramas(){
  this.servicioProgramaService.obtenerPrograma().subscribe(programas=>{
     this.programaDTO=programas;
   });
}
 cargarMaterias(){
  this.ServicioMateriaService.obtenerMateria().subscribe(materias=>{
     this.materiaDTO=materias
   });
}


onProgramaChange(event: any) {
  const selectedId = event.target.value;
  this.selectedPrograma=selectedId;
}

 public agregarEstudiante(){
    //console.log(this.form.get('Nombre')?.value)
    //console.log(this.selectedPrograma);
   const selectedIds = this.materiaDTO
  .filter(materia => materia.seleccionado)
  .map(materia => materia.id);
  const selectedIdsJson = JSON.stringify(selectedIds);
  //console.log(selectedIdsJson); // Salida: [1,3] 
 
  this.estudianteCreacion.Nombre=this.form.get('Nombre')?.value;
  this.estudianteCreacion.fkidprograma=this.selectedPrograma;
  this.estudianteCreacion.Materia=selectedIdsJson;


  this.agregarEstudianteEnvio(this.estudianteCreacion);
  

 }


 agregarEstudianteEnvio(e:EstudianteCreacionDTO){
  this.ServicioEstudianteService.PostEstudiante(this.estudianteCreacion).subscribe(respuesta=>{
    //console.log(respuesta);
    if(respuesta=="1"){
      this.form.reset();
      this.materiaDTO=[];
      this.cargarMaterias();
      this.selectedPrograma=0;
      //console.log(this.form);
      //console.log(this.materiaDTO);
      //console.log(this.selectedPrograma);
      Swal.fire({
        title: "Correcto",
        text: "Estudiante agregado...",
        icon: "success"
      });
      
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo agregar al estudiante..." 
      });
    }

 });
 }


 onCheckboxChange(event: Event,index: any, item:number): void {
  const inputElement = event.target as HTMLInputElement;
  let isChecked = inputElement.checked;


  let contaMaterias=0;
  let contaKfIdProfesor=0;
  this.materiaDTO[index].seleccionado=inputElement.checked;
  this.materiaDTO.forEach(element => {
    if(element.seleccionado==true){
      contaMaterias++;
    }
    if(this.materiaDTO[index].fkIdProfesor==element.fkIdProfesor && element.seleccionado==true){
      contaKfIdProfesor++;
    }
    
  });
 
  if(contaMaterias>3){
    this.materiaDTO[index].seleccionado=false;
    inputElement.checked=false;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se puede seleccionar mas de tres materias." 
    });
  }
  if(contaKfIdProfesor>1){
    this.materiaDTO[index].seleccionado=false;
    inputElement.checked=false;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se puede matricular mas de una materia con el mismo profesor." 
    });
  }
  
  //console.log(contaMaterias)
  //Caso mas de tres materias
  //alert(isChecked+','+item);
}

}
