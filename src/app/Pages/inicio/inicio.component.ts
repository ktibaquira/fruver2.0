import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/Model/Productos';
import { ProductosService } from 'src/app/Service/productos.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  //variables
  productos: Productos [] = [];
  /*@Input() producto: Productos={
    idProducto:0, 
    nombre: ' ',
    precio: 0,
    descripcion: '',
    imagen:' ',
    correoAdmin:' '
  }*/
  constructor(
    private productosService:ProductosService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    //asincrona
    this.productosService.listar().subscribe(data =>{
      console.log(data);
      //hacemos la asignacion al arreglo
      this.productos= data;

    });
  }

  //metodos

  
}
