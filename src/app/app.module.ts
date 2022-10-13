import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Material/Material.module';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NavegacionComponent } from './Pages/navegacion/navegacion.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { TiendaComponent } from './Pages/tienda/tienda.component';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { DescripcionCategoriaComponent } from './pages/descripcion-categoria/descripcion-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    TiendaComponent,
    NavegacionComponent,
    CategoriaComponent,
    DescripcionCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
