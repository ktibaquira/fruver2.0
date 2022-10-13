import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { CategoriaComponent } from './Pages/categoria/categoria.component';

import { TiendaComponent } from './Pages/tienda/tienda.component';
import { DescripcionCategoriaComponent } from './pages/descripcion-categoria/descripcion-categoria.component';

const routes: Routes = [
  //inicio
  {path: 'inicio', component:InicioComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'tienda', component:TiendaComponent},
  {path: 'categoria', component:CategoriaComponent},
  {path: 'descripcion-categoria', component:DescripcionCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
