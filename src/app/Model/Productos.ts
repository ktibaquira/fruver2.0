export interface Productos{
    idProducto: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen:string;
    correoAdmin:string;
    categorias:Categoria;
}
export interface Categoria{
    descripcion:String[];
}