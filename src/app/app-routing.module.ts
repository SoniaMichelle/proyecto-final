import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { ItemsComponent } from './components/items/items.component';

const router: Routes = [
  /* Espesificacion de las rutas */
  {
    path: '', /* Index tradicional */
    component: ItemsComponent /* propiedad que pide el componente que queremos cargar */
  },
  {
    path: 'add',
    component: AdditemComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
