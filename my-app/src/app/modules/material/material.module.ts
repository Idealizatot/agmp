import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
