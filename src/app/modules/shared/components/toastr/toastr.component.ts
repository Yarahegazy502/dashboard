import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  @Input() show:any;
  @Input() data:any=[];
  // s:any=true
  // val:any=100
  constructor(public cdr:ChangeDetectorRef) { }
  ngOnInit()
  {
    console.log("ssdsdsadsda");

    console.log(this.data);

  }
  removeItem(e:any){
    for(let i=0 ;i<this.data.length;i++){
      // this.data[i].show=true
      console.log(e);
      if(i==e){
        this.data[e].show=false
        // console.log(this.data[i]);
        // this.show=false
        // this.data = this.data.filter(((e:any)=>{
        //   return e != this.data[i]
        // }))
        console.log(this.data[e]);

        break;
      }
      // else{
      //   this.data[i].show=true;
      // }
    }


    // this.data.forEach((ele: any) => {
    //   if(ele==this.data[e]){
    //     ele.show=false
    //   }else{
    //     ele.show=false
    //   }
    // });

  }
}
