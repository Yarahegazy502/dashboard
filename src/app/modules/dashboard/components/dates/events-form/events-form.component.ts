import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from '../dates.component';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {
  bsValue = new Date();
  constructor(
    public dialogRef: MatDialogRef<EventsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public datepipe: DatePipe,
    public fb:FormBuilder
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
   events = this.fb.group({
    title:[''],
    desc:[''],
    sDate:[null],
    eDate:[null],
    sTime:[null],
    eTime:[null],
  })

  onNoClick(): void {
    this.dialogRef.close();
  }

}
