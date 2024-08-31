export interface EstudianteDTO {
    IdEstudiante:number;
    NombreEstudiante:string;
    Programa:string;
}


export interface EstudianteProgramaDTO {
    id:string;
    nombre:string;
    nombrePrograma:string;
    fkidprograma:string;
    materiaconcatenada:string;
    estudiantemateria:string
}

export interface EstudianteClasesDTO {
    materiaid:string;
    nombreestudiante:string;
    nombremateria:string;
 
}


export class EstudianteCreacionDTO {
    Nombre: string;
    fkidprograma: string;
    Materia: string;

    constructor() {
        this.Nombre = "";
        this.fkidprograma = "";
        this.Materia = "";
    }
}

export class AtributoDTO {
    numero: string;
 

    constructor() {
        this.numero="";
    }
}



export class EstudianteActualizacionDTO {
    Id:string;
    Nombre: string;
    fkidprograma: string;
    Materia: string;
    estudiantemateria:string;

    constructor() {
        this.Id="";
        this.Nombre = "";
        this.fkidprograma = "";
        this.Materia = "";
        this.estudiantemateria="";
    }

}