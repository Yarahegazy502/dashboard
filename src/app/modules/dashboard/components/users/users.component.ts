import { state } from '@angular/animations';
import { userData } from './../../../shared/TS Files/userData';
import { jsPDF } from 'jspdf';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  showSpinner: boolean = true;
  users2=userData
  usersList: any=userData;
  users: any = [];
  masterSelected: any;
  checkedList: any;
  userName: any = '';
  page = 1;
  tableSize = 4;
  count = 0;

  @ViewChild("content", { static: false }) content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.showSpinner = false;
    setTimeout(() => {
      console.log(this.usersList);
      this.masterSelected = false;
      this.users=this.usersList
      this.getCheckedItemList();
      this.showSpinner = true;
    }, 2000);
  }

  filterUser(): void {
    this.users = this.usersList?.filter((i: any) => {
      return i.name?.toLocaleLowerCase().includes(this.userName?.toLocaleLowerCase());
    })
  }
  clear(): void {
    this.userName = '';
    return this.users = this.usersList;

  }
  deleteItem(): void {
    console.log(this.checkedList);
    this.checkedList?.forEach((e:any) => {
      console.log(e.id);
    });
  }

  checkUncheckAll(): void {
    this.usersList?.forEach((e: any) => {
      e.selected = this.masterSelected;
    });
    this.getCheckedItemList();
  }
  isAllSelected(): void {
    this.masterSelected = this.users?.every(function (item: any) {
      return item.selected == true;
    })
    this.getCheckedItemList();
  }
  getCheckedItemList(): void {
    this.checkedList = [];
    this.usersList?.forEach((e: any) => {
      if (e.selected) {
        this.checkedList?.push(e);
      }

    });
  }

  PrintRecord(){
    var divToPrint = document.getElementById("content") as HTMLElement;
    var newWin = window.open("");
    newWin?.document.write(divToPrint.outerHTML);
    newWin?.print();
    newWin?.close();
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('userData.pdf');
    });
  }
openCsv(){
  var op = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    headers: ["selected",  "ID","name","img","email","date","verify","status"]
  };
  new ngxCsv(this.users,'userData',op);

}
sort(type:any,key:any):void{
  if(key=='id'){
    if(type=='des'){
      let sortUsers = this.users.sort((a:any,b:any) =>b.id - a.id);
      this.users=sortUsers
    }else if(type=='asc'){
      let sortUsers = this.users.sort((a:any,b:any) =>a.id - b.id);
      this.users=sortUsers
    }
  }
  if(key=='status'){
    if(type=='des'){
      let sortUsers = this.users.sort((a:any,b:any) =>b.status - a.status);
      this.users=sortUsers
    }else if(type=='asc'){
      let sortUsers = this.users.sort((a:any,b:any) =>a.status - b.status);
      this.users=sortUsers
    }
  }
}

sortName(type:any,name:any):void{
    let dir = type=='des'?1:-1;
    if(type=='des'){
      this.users.sort(function(a:any,b:any){
        if(a[name] < b[name]){
          dir = dir * -1;
        }
        return dir
        // return d
      })
    }
    else if(type=='asc'){
      this.users.sort(function(a:any,b:any){
        if(a[name] > b[name]){
          dir = dir * -1;
        }
        return dir
        // return d
      })
    }
}
}
