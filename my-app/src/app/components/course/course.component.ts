import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../../course';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseComponent implements OnInit {
  @Input() course!: Course;

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: {
        onClickNo: () => {
          console.log('callbackNo');
          dialogRef.close();
        },
        onClickYes: () => {
          console.log('callbackYes');
          this.onDelete.emit(this.course.id);
          dialogRef.close();
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`popup close ${result}`);
    })
    // this.onDelete.emit(this.course.id);
  }

}
