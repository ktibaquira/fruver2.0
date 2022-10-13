import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria, Productos } from '../Model/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    //url base
  //private url: string = `${environment.HOST}productos`;
  private url: string = `http://localhost:8080/productos`;
  constructor(private http: HttpClient) { }

  //metodos productos 
  //listar todo - get
  listar() {
    return this.http.get<Productos[]>(`${this.url}`);
  } 
  //listar por id - get
  listarPorId(idProducto:number){
    //https://fruver-app.herokuapp.com/productos/getProducto/undefined
    return this.http.get<Productos>(`${this.url}/getProducto/${idProducto}`);
  }
  //guardar - post
  guardar(productos: Productos){
    return this.http.post(`${this.url}`,productos);
  }
  //modificar - put
  editar(productos: Productos){
    return this.http.post(`${this.url}`,productos);
  }
  //eliminar - delect
  //https://fruver-app.herokuapp.com/productos/deleteProducto/22
  eliminar(idProducto:number){
    return this.http.delete(`${this.url}/deleteProducto/${idProducto}`);
  }

  //CATEGORIAS
  listarCategorias() {
    return this.http.get<Productos[]>(`${this.url}/categorias`);
  } 
  //GET CATEGORIAS
  listarPorCategoria(descripcion:string){
    //https://fruver-app.herokuapp.com/productos/getProducto/undefined
    return this.http.get<Categoria>(`${this.url}/categorias/${descripcion}`);
  }

}
