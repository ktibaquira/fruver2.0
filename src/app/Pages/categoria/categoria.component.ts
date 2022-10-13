import { Component, Input, OnInit, Output } from '@angular/core';
import { Productos } from 'src/app/Model/Productos';
import { ProductosService } from 'src/app/Service/productos.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  //parametros url
  constructor(
    private ps:ProductosService
  ) { }
  ngOnInit(): void {
    
  }

}
