import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesasIndexComponent } from './mesas-index/mesas-index.component';
import { MesaAllComponent } from './mesa-all/mesa-all.component';
const routes: Routes = [
  {path:'mesas-restaurante', component: MesasIndexComponent},
  {path:'mesas/all', component: MesaAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRestauranteRoutingModule { }
