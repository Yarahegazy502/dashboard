import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
@Input() showAlert:any;
@Input() value:any;
@Input() bufferValue:any;
@Input() data:any=[];
@Input() dataItem:any;
@Input() item:any;
@Output() index2 = new EventEmitter<any>;
filteredData:any=[]

  constructor() { }

  ngOnInit(): void {
    // this.data=this.filteredData;
    let interval=setInterval(()=>{
      this.value-=10;
      if(this.value==0){
        clearInterval(interval)
        // this.showAlert=false;
        // return this.data.filter((i:any)=>{
        //   console.log(i);
        // })
        // this.data.filter((i:any)=>{
        //   if(i==this.data[this.dataItem]){
        //     this.data[this.dataItem].show=false
        //   }else{
        //     this.data[this.dataItem].show=true
        //   }
        // })
        // this.r(this.item)
        this.index2.emit(this.dataItem)
        // console.log(this.dataItem);
        // console.log(this.data);
        // this.data.splice(this.dataItem,1)
        // this.data = this.data.filter((x:any) => x !== this.data[this.dataItem]);
        //  return this.data.splice(this.dataItem, 1)
        // console.log(this.data.pop(this.dataItem));//[this.dataItem]
        // return this.data.slice(0, this.dataItem).concat(this.data.slice(this.dataItem + 1, this.data.length))

        // this.cdr.detectChanges()


      }
  }, 500);
  }
r(a:any){
  // this.data = this.data.filter((x:any) => x !== a);
// console.log(this.data);
}

}
