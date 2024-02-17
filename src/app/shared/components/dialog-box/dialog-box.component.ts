import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogData } from 'src/app/models/dialog-data';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './dialog-box.component.html',
})
export class DialogBoxComponent implements OnInit {
  title = 'Error';
  message = 'Oops!! Something Went Wrong';
  type = 'error';
  buttons = ['Ok'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.type = this.data.type ?? this.type;
    this.title = this.data.title ?? this.title;
    this.message = this.data.message ?? this.message;
    this.buttons = this.data.buttons ?? this.buttons;
  }
}
