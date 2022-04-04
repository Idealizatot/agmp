import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css']
})
export class ConfirmPopupComponent implements OnInit {

  onClickYes: () => {};
  onClickNo: () => {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    onClickNo: () => {},
    onClickYes: () => {}
  }) {
    this.onClickNo = data.onClickNo;
    this.onClickYes = data.onClickYes;
  }

  ngOnInit(): void {
  }

}
