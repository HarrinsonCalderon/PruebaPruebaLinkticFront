import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteActualizacionDTO, EstudianteProgramaDTO } from 'src/app/Modelos/EstudianteDTO';
import { MateriaDTO } from 'src/app/Modelos/MateriaDTO';
import { ProgramaDTO } from 'src/app/Modelos/ProgramaDTO';
import { ServicioEstudianteService } from 'src/app/Servicios/servicio-estudiante.service';
import { ServicioMateriaService } from 'src/app/Servicios/servicio-materia.service';
import { ServicioProgramaService } from 'src/app/Servicios/servicio-programa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {

  form:FormGroup;
  materiaDTO:MateriaDTO[]=[];
  programaDTO:ProgramaDTO[]=[];
  IdEstudiante :any;
  NombreEstudiante :any;
  FkIdPrograma :any;
  MateriasConcatenadas :any;
  programaSeleccionado: any; 
  estudianteActualizacion:EstudianteActualizacionDTO;
  selectedPrograma: any;
  estudiantemateria:any;
  
   ngOnInit(): void {
    this.cargarProgramas();
    this.cargarMaterias();
    this.activetedRoute.params.subscribe(parametro=>{
      this.activetedRoute.paramMap.subscribe(params => {
        this.IdEstudiante = params.get('Id');
         this.obternerEstudiantePrograma(this.IdEstudiante);
         
        // Puedes agregar aquí lógica adicional para manejar el 'id'
       });
      });
      //this.router.navigateByUrl('/ActualizarPersona/'+this.IdEstudiante);
   }
   cargarTodo(){
    this.cargarProgramas();
    this.cargarMaterias();
    this.obternerEstudiantePrograma(this.IdEstudiante);
         //this.router.navigateByUrl('/ActualizarPersona/'+this.IdEstudiante);
   }
   constructor(private fb:FormBuilder,private activetedRoute:ActivatedRoute
   ,private ServicioEstudianteService:ServicioEstudianteService,
   private servicioProgramaService:ServicioProgramaService,
   private ServicioMateriaService:ServicioMateriaService,
   private router: Router



   ){
    this.estudianteActualizacion=new EstudianteActualizacionDTO();
     this.form=this.fb.group({
       Nombre:['',Validators.required],
       Programaselect: [''] ,
       Materias: this.fb.array([])
     })
   
   }
   public agregarEstudiante(){
  
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
    
   obternerEstudiantePrograma(Id:any){
    let materias="";
    this.ServicioEstudianteService.GetEstudianteProgramaId(Id).subscribe(estudiante=>{
      console.log("->",estudiante)
      this.selectedPrograma=estudiante[0].fkidprograma;
      this.estudiantemateria=estudiante[0].estudiantemateria;
      this.asignarMaterias(estudiante[0].materiaconcatenada)
      this.form=this.fb.group({
        Nombre:[estudiante[0].nombre,Validators.required]  ,
        Programaselect: [estudiante[0].fkidprograma] 
      })
     }); 
}

asignarMaterias(materias:any){
    //Seleccionar en el modelo materiaDTO
    console.log(materias);
   var vector=materias.split(",");
  this.materiaDTO.forEach(element => {
      if(vector.includes(element.id+"")){
        element.seleccionado = true;
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
    
    console.log(contaMaterias)
    //Caso mas de tres materias
    //alert(isChecked+','+item);
  }


  onProgramaChange(event: any) {
    const selectedId = event.target.value;
    this.selectedPrograma=selectedId;
    console.log(selectedId);
  }
  


  public actualizarEstudiante(){
   const selectedIds = this.materiaDTO
  .filter(materia => materia.seleccionado)
  .map(materia => materia.id);
  const selectedIdsJson = JSON.stringify(selectedIds);

  this.estudianteActualizacion.Id=this.IdEstudiante;
  this.estudianteActualizacion.Nombre=this.form.get('Nombre')?.value;
  this.estudianteActualizacion.fkidprograma=this.selectedPrograma;
  this.estudianteActualizacion.Materia=selectedIdsJson;
  this.estudianteActualizacion.estudiantemateria=this.estudiantemateria;
  console.log(selectedIdsJson,"fkidprograma")
  this.actualizarEstudianteEnvio(this.estudianteActualizacion);
  

 }

 
  actualizarEstudianteEnvio(e:EstudianteActualizacionDTO){

  this.ServicioEstudianteService.PostEstudianteActualizar(e).subscribe(respuesta=>{
    //console.log(respuesta);
    if(respuesta=="1"){
      this.form.reset();
      this.materiaDTO=[];
      this.cargarMaterias();
      this.selectedPrograma=0;

      this.cargarTodo();

      //console.log(this.form);
      //console.log(this.materiaDTO);
      //console.log(this.selectedPrograma);
      Swal.fire({
        title: "Correcto",
        text: "Estudiante actualizado...",
        icon: "success"
      });
      
    }else{
      Swal.fire({
        title: "Correcto",
        text: "Estudiante agregado...",
        icon: "success"
      });
    }
 
 });



 }

  
  }
  