export class Serie {
   id: number;
   nombre : string;
   canal: string;
   temporada: number;
   descripcion: string;
   url:string;
   imagen:string;

   constructor(id: number, nombre: string, canal:string, temporada: number, descripcion: string, url:string, imagen:string)
   {
      this.id = id;
      this.nombre = nombre;
      this.canal = canal;
      this.temporada = temporada;
      this.descripcion = descripcion;
      this.url = url;
      this.imagen = imagen;
   }
}

