import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRestauranteRoutingModule } from './mesas-restaurante-routing.module';
import { MesasIndexComponent } from './mesas-index/mesas-index.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MesaAllComponent } from './mesa-all/mesa-all.component';
import { MesaDetailComponent } from './mesa-detail/mesa-detail.component';

@NgModule({
  declarations: [MesasIndexComponent, MesaAllComponent, MesaDetailComponent],
  imports: [
    CommonModule,
    MesasRestauranteRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatDialogModule,
  ],
})
export class MesasRestauranteModule {}
