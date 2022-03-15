import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from 'src/app/components/course/course.component';
import { DataVisualizationDirective } from 'src/app/directives/data-visualization/data-visualization.directive';
import { ConfirmPopupComponent } from 'src/app/components/confirm-popup/confirm-popup.component';

@NgModule({
  declarations: [
    CourseComponent,
    DataVisualizationDirective,
    ConfirmPopupComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
