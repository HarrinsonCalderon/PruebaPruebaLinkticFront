import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteClaseDTO } from 'src/app/Modelos/EstudianteClaseDTO';
import { EstudianteClasesDTO } from 'src/app/Modelos/EstudianteDTO';
import { ServicioEstudianteService } from 'src/app/Servicios/servicio-estudiante.service';

@Component({
  selector: 'app-listado-clase',
  templateUrl: './listado-clase.component.html',
  styleUrls: ['./listado-clase.component.css']
})
export class ListadoClaseComponent implements OnInit{

 
  EstudianteClaseDTO:EstudianteClasesDTO[]=[]
  Ide:any
 ngOnInit(): void {
  this.activetedRoute.params.subscribe(parametro=>{
    this.activetedRoute.paramMap.subscribe(params => {
      this.Ide = params.get('Id');
      // Puedes agregar aquí lógica adicional para manejar el 'id'
      this.cargarProgramas();
    });
    });
 }

constructor(private activetedRoute:ActivatedRoute,private ServicioEstudianteService:ServicioEstudianteService){
 
}


cargarProgramas(){
  this.ServicioEstudianteService.GetEstudiantClase(this.Ide).subscribe(clase=>{
    console.log(clase)
     this.EstudianteClaseDTO=clase;
   });
}
}
