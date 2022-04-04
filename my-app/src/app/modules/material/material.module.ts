import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
  ]
})
export class MaterialModule { }
