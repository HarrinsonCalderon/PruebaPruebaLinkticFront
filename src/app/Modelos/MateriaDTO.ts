export interface MateriaDTO {
    id:number;
    nombre:string;
    creditos:number;
    fkIdProfesor: number;
    nombreProfesor :string;
    seleccionado:boolean;
}