import { FormBuilder } from '@angular/forms';
import { EventsFormComponent } from './events-form/events-form.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';

export interface DialogData {
  animal: string;
  name: string;
  // events:any
}
@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  animal: any;
  eventsContent:any

  Events: any[] = [
    { title: 'event 1', start: '2022-11-08T10:30:00',
    end: '2022-11-09T11:30:00' ,color:'#ef305e'},
    { title: 'event 2', start: '2022-11-09T10:30:00',
    end: '2022-11-11T11:30:00' ,color:'#ef305e'},
    { title: 'event 2', start: '2022-11-25T10:30:00',
    end: '2022-11-26T11:30:00' ,color:'#ef305e'},
  ];
  anys: any[] = [
    { title: 'event 1', start: '2022-11-08T10:30:00',
    end: '2022-11-09T11:30:00' ,color:'#ef305e'},
    { title: 'event 2', start: '2022-11-09T10:30:00',
    end: '2022-11-11T11:30:00' ,color:'#ef305e'},
    { title: 'event 2', start: '2022-11-25T10:30:00',
    end: '2022-11-26T11:30:00' ,color:'#ef305e'},
  ];
  openDialog(): void {
    const dialogRef = this.dialog.open(EventsFormComponent, {
      width: '400',
      data: {animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result.sDate=this.datepipe.transform(result.sDate, 'yyyy-MM-dd')
      result.eDate=this.datepipe.transform(result.eDate, 'yyyy-MM-dd')
      // console.log(result.eDate);
      // console.log(result.eTime);
      this.eventsContent={
        title:result.title,
        start:(result.sDate+'T'+result.sTime+':00'),
        end:(result.eDate+'T'+result.eTime+':00'),
        color:'#ef305e'
      }
      // this.Events.push(this.eventsContent);
      this.anys.push(this.eventsContent);

      console.log(this.Events);
      this.addItemToCalender()
      // this.ngOnInit();

    });

  }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: this.Events
  };
  constructor(
    private httpClient: HttpClient,
    public cdr:ChangeDetectorRef,
    public datepipe: DatePipe,
    public dialog: MatDialog,
    public fb:FormBuilder,
    ) { }
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   dateClick: this.handleDateClick.bind(this), // bind is important!
  //   events: [
  //     { title: 'event 1', date: '2019-04-01' },
  //     { title: 'event 2', date: '2019-04-02' }
  //   ]
  // };

  // handleDateClick(arg:any) {
  //   alert('date click! ' + arg.dateStr)
  // }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.calendarOptions = {
    //     initialView: 'dayGridMonth',
    //     dateClick: this.onDateClick.bind(this),
    //     events: this.Events,
    //   };
    // }, 2500);

  }

  addItemToCalender(){
    console.log("addItemToCalender " + this.anys);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.anys,
      };
    }, 100);
  }

}
