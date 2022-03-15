import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from 'src/app/components/course/course.component';
import { DataVisualizationDirective } from 'src/app/directives/data-visualization/data-visualization.directive';
import { ConfirmPopupComponent } from 'src/app/components/confirm-popup/confirm-popup.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CourseComponent,
    DataVisualizationDirective,
    ConfirmPopupComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CourseComponent,
  ]
})
export class CourseModule { }
