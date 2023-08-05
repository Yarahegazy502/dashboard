import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term='';
  collapsed:boolean=false;
  newsearch:any=[]
search=[
  {title:"BoomApp by Keenthemes",color:"#45789"},
  {title:"Kept API Project Meeting",color:"#45789"},
  {title:"FitPro App Development",color:"#45789"},
  {title:"Project Reference FAQ",color:"#45789"},
  {title:"Shopix Mobile App",color:"#45789"},
  {title:"Landing UI Design",color:"#24005"},
  {title:"BoomApp by Keenthemes",color:"#45789"},
  {title:"BoomApp by Keenthemes",color:"#45789"},
  {title:"BoomApp by Keenthemes",color:"#45789"},
]
  constructor() { }

  ngOnInit(): void {
    this.newsearch=this.search;
  }
  filterData(){
   this.newsearch=this.search.filter((item)=>{
   return item.title.toLocaleLowerCase().includes(this.term.toLocaleLowerCase())
   })
  }
  clearText(){
    this.term='';
    // this.collapsed=true;
   return this.newsearch=this.search;
  }

}
