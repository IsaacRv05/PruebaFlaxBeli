import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosAllComponent } from './pedidos-all/pedidos-all.component';
import { PedidosDetailComponent } from './pedidos-detail/pedidos-detail.component';

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

@NgModule({
  declarations: [PedidosAllComponent, PedidosDetailComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule,
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
  ]
})
export class PedidosModule { }
