import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/Model/Productos';
import { ProductosService } from '../../Service/productos.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  //dataSource = new MatTableDataSource(Productos);
  categorias: Productos [] = [];

  constructor( 
    private router: Router,
    private ps:ProductosService
  ) { }

  ngOnInit(): void {
    this.ps.listarCategorias().subscribe(data=>{
      console.log(data);
      this.categorias=data;
    });
  }
  //metodos
   click(desc: string){
    this.ps.listarPorCategoria(desc).subscribe(obj =>{
      console.log("el objeto es ",obj);
    });
   }
}
